import { ensureDirSync } from "fs-extra";
import { Err, Ok, Result } from "ts-results";
import { html_beautify as beautifyHtml } from "js-beautify";
import { IPage } from "../../models/page-packet/page/i-page";
import { IPageFolder } from "../../models/page-packet/page-folder/i-page-folder";
import { IPagePackageWriter } from "./i-page-package-writer";
import { IPagePackageWriterParameters } from "./i-page-package-writer-parameters";
import { IPagePacket } from "../../models/page-packet/i-page-packet";
import { ISourceCodeDocsCreatorConfiguration } from "../../models/configuration/i-source-code-docs-creator-configuration";
import { minify as minifyHtml } from "html-minifier";
import { writeFileSync } from "node:fs";

class PagePackageWriter implements IPagePackageWriter {
    public configuration: ISourceCodeDocsCreatorConfiguration;
    public pagePackage: IPagePacket;

    public constructor(parameters: IPagePackageWriterParameters) {
        this.configuration = parameters.configuration;
        this.pagePackage = parameters.pagePackage;
    }

    public async start(): Promise<Result<IPagePacket, Error>> {
        const writeItemOpResult = await this.__writeItem(this.pagePackage.root);

        if (writeItemOpResult.err)
            return writeItemOpResult;

        return new Ok(this.pagePackage);
    }

    private async __writeItem(pageOrFolder: IPage<any> | IPageFolder): Promise<Result<undefined, Error>> {
        if (pageOrFolder.type === "file")
            return this.__writePage(pageOrFolder as IPage);

        return this.__writePageFolder(pageOrFolder as IPageFolder);
    }

    private async __writePage(page: IPage<any>): Promise<Result<undefined, Error>> {
        let opError: Error | undefined;

        try
        {
            if (this.configuration.output.minify === true)
                page.content = this.__minifyPageContent(page.content);

            if (this.configuration.output.beautify === true) {
                page.content = this.__minifyPageContent(page.content);
                page.content = this.__beautifyPageContent(page.content);
            }

            writeFileSync(page.pathAbs, page.content, "utf-8");
        }
        catch(error: unknown)
        {
            opError = error as Error;
        }

        if (opError)
            return new Err(opError);

        return new Ok(undefined);
    }

    private async __writePageFolder(pageFolder: IPageFolder): Promise<Result<undefined, Error>> {
        let opError: Error | undefined;

        try
        {
            ensureDirSync(pageFolder.pathAbs);

            for (let i = 0; i < pageFolder.contents.length; i++) {
                const currentContent = pageFolder.contents[i];

                if (!currentContent)
                    continue;

                const writeItemOpResult = await this.__writeItem(currentContent);

                if (writeItemOpResult.err)
                    throw writeItemOpResult.val;
            }
        }
        catch(error: unknown)
        {
            opError = error as Error;
        }

        if (opError)
            return new Err(opError);

        return new Ok(undefined);
    }

    private __beautifyPageContent(pageContent: string): string {
        if (this.configuration.output.format === "html")
            return beautifyHtml(pageContent);

        return pageContent;
    }

    private __minifyPageContent(pageContent: string): string {
        if (this.configuration.output.format === "html")
            return minifyHtml(pageContent);

        return pageContent;
    }
};

export { PagePackageWriter };
