import { IFile } from "../file-system/file/i-file";
import { ITheme } from "./i-theme";
import { IThemeConfiguration } from "./i-theme-configuration";
import { IThemeParameters } from "./i-theme-parameters";

class Theme implements ITheme {
    public basePath: string;
    public configuration: IThemeConfiguration;
    public templatesMap: { [key: string]: IFile<string>; };

    public constructor(parameters: IThemeParameters) {
        this.basePath = parameters.basePath;
        this.configuration = parameters.configuration;
        this.templatesMap = parameters.templatesMap;
    }
};

export { Theme };
