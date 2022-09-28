import { basename, join, parse, relative } from "node:path";
import { Err, Ok, Result } from "ts-results";
import { File } from "../../models/file-system/file/file";
import { IFile } from "../../models/file-system/file/i-file";
import { ISourceCodeDocsCreatorConfiguration } from "../../models/configuration/i-source-code-docs-creator-configuration";
import { ITheme } from "../../models/theme/i-theme";
import { IThemeConfiguration } from "../../models/theme/i-theme-configuration";
import { IThemeLoader } from "./i-theme-loader";
import { readFileSync } from "node:fs";
import { Theme } from "../../models/theme/theme";
import { THEME_CONFIG_FILE_NAME } from "../../constants";
import klaw, { Item, Walker } from "klaw";

class ThemeLoader implements IThemeLoader {
    private __configuration: ISourceCodeDocsCreatorConfiguration;

    public constructor(configuration: ISourceCodeDocsCreatorConfiguration) {
        this.__configuration = configuration;
    }

    public async start(): Promise<Result<ITheme, Error>> {
        return new Promise(async (resolve, reject): Promise<void> => {
            const themeBasePath: string = this.__configuration.theme.path;

            const loadConfigurationOpResult = await this.__loadConfiguration(themeBasePath);

            if (loadConfigurationOpResult.err)
                return resolve( new Err(loadConfigurationOpResult.val) );

            const walker: Walker = klaw(themeBasePath);

            const theme: ITheme = new Theme({
                basePath: themeBasePath,
                configuration: loadConfigurationOpResult.val.content || { path: "" },
                templatesMap: {},
            });

            walker.on("data", (fileOrFolder: Item): void => {
                if ( fileOrFolder.stats.isDirectory() || fileOrFolder.path.endsWith(THEME_CONFIG_FILE_NAME) )
                    return;

                const pathAbs = fileOrFolder.path;
                const pathRel = relative(themeBasePath, pathAbs);
                const name = basename(fileOrFolder.path);
                const nameWithoutExtension = parse(pathAbs).name;
                theme.templatesMap[nameWithoutExtension] = new File<string>({ 
                    pathRel,
                    pathAbs,
                    name,
                    type: "file",
                });
            });

            walker.on("error", (error: unknown): void => {
                walker.destroy();
                return resolve( new Err(error as Error) );
            });

            walker.on("end", (): void => {
                return resolve( new Ok(theme) );
            });
        });
    }

    private async __loadConfiguration(basePathAbs: string): Promise<Result<IFile<IThemeConfiguration>, Error>> {
        const configFilePathAbs = join(basePathAbs, THEME_CONFIG_FILE_NAME);

        let opError: Error | undefined;
        let configFileContents: any = {};

        try
        {
            const configFileContentsSerialized = readFileSync(configFilePathAbs, "utf-8");
            configFileContents = JSON.parse(configFileContentsSerialized);
            configFileContents = Object.assign({}, configFileContents);
        }
        catch(error: unknown)
        {
            opError = error as Error;
        }

        if (opError)
            return new Err(opError);

        return new Ok(new File<any>({
            content:    configFileContents,
            name:       THEME_CONFIG_FILE_NAME,
            pathAbs:    configFilePathAbs,
            pathRel:    relative(basePathAbs, configFilePathAbs),
            type:       "file",
        }));
    }
};

export { ThemeLoader };
