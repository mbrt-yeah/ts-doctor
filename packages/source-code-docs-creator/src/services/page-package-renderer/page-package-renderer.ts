import { config as etaDefaultConfiguration } from "eta";
import { Err, Ok, Result } from "ts-results";
import { IFile } from "../../models/file-system/file/i-file";
import { IPage } from "../../models/page-packet/page/i-page";
import { IPageFolder } from "../../models/page-packet/page-folder/i-page-folder";
import { IPagePackageRenderer } from "./i-page-package-renderer";
import { IPagePacket } from "../../models/page-packet/i-page-packet";
import { ITheme } from "../../models/theme/i-theme";
import { IThemeTemplateLookup } from "../theme-template-lookup/i-theme-template-lookup";
import { IThemeTemplateLookupResult } from "../theme-template-lookup";
import { renderFile } from "eta";
import { ThemeTemplateLookup } from "../theme-template-lookup/theme-template-lookup";

class PagePackageRenderer implements IPagePackageRenderer {
    private __pagePacket: IPagePacket;
    private __theme: ITheme;
    private __themeTemplateLookup: IThemeTemplateLookup;

    public constructor(pagePacket: IPagePacket, theme: ITheme) {
        this.__pagePacket = pagePacket;
        this.__theme = theme;
        this.__themeTemplateLookup = new ThemeTemplateLookup({ theme });
    }

    public async start(): Promise<Result<IPagePacket, Error>> {
        etaDefaultConfiguration.views = this.__theme.basePath;

        const renderResultOp = await this.__render(this.__pagePacket.root);

        if (renderResultOp.err)
            return renderResultOp;

        this.__pagePacket.root = renderResultOp.val;

        return new Ok(this.__pagePacket);
    }

    private async __render(pageOrFolder: IPage<any> | IPageFolder): Promise<Result<IPage | IPageFolder, Error>> {
        if (pageOrFolder.type === "file" )
            return this.__renderPage(pageOrFolder as IPage);

        return this.__renderPageFolder(pageOrFolder as IPageFolder);
    }

    private async __renderPage(page: IPage<any>): Promise<Result<IPage, Error>> {
        const templateLookupOpResult = await this.__themeTemplateLookup.start(page.subType);

        if (templateLookupOpResult.err)
            return templateLookupOpResult;

        const templateLookupResult: IThemeTemplateLookupResult[] = templateLookupOpResult.val;

        let opError: Error | undefined;

        try
        {
            let templateKeys: string[] = [];
            let template: IFile | undefined;

            for (const templateLookupResultSingle of templateLookupResult) {
                templateKeys.push(templateLookupResultSingle.key);

                if (templateLookupResultSingle.template) {
                    template = templateLookupResultSingle.template;
                    break;
                }
            }

            if (!template)
                throw new Error(`No template found for page with name >${page.name}< and type ${page.subType}. A lookup was performed for the following templates: >${templateKeys.join(", ")}<`);

            page.content = await renderFile(template.pathAbs, {
                configuration: this.__theme.configuration,
                index: this.__pagePacket.index || {},
                page,
            });
        }
        catch(error: unknown)
        {
            opError = error as Error;
        }

        if (opError)
            return new Err(opError);

        return new Ok(page);
    }

    private async __renderPageFolder (pageFolder: IPageFolder): Promise<Result<IPageFolder, Error>> {
        if (!pageFolder.contents)
            return new Ok(pageFolder);

        let opError: Error | undefined;

        for (let i = 0; i < pageFolder.contents.length; i++) {
            const currentContent = pageFolder.contents[i];

            if (!currentContent)
                continue;

            const renderOpResult = await this.__render(currentContent);

            if (renderOpResult.err) {
                opError = renderOpResult.val;
                break;
            }

            pageFolder.contents[i] = renderOpResult.val;
        }

        if (opError)
            return new Err(opError);

        return new Ok(pageFolder);
    }
};

export { PagePackageRenderer };
