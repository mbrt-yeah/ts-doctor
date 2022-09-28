import { IApiDoc } from "@ts-doctor/source-code-parser-result-model";
import { IPagePackageCreator } from "./services/page-package-creator/i-page-package-creator";
import { IPagePackageIndexCreator } from "./services/page-package-index-creator/i-page-package-index-creator";
import { IPagePackageRenderer } from "./services/page-package-renderer/i-page-package-renderer";
import { IPagePacket } from "./models/page-packet/i-page-packet";
import { ISourceCodeDocsCreator } from "./i-source-code-docs-creator";
import { ISourceCodeDocsCreatorConfiguration } from "./models/configuration/i-source-code-docs-creator-configuration";
import { IThemeLoader } from "./services/theme-loader/i-theme-loader";
import { Ok, Result } from "ts-results";
import { PagePackageCreator } from "./services/page-package-creator/page-package-creator";
import { PagePackageIndexCreator } from "./services/page-package-index-creator/page-package-index-creator";
import { PagePackageRenderer } from "./services/page-package-renderer/page-package-renderer";
import { PagePackageWriter } from "./services/page-package-writer";
import { ThemeLoader } from "./services/theme-loader/theme-loader";

class SourceCodeDocsCreator implements ISourceCodeDocsCreator {
    private __input: IApiDoc;
    private __configuration: ISourceCodeDocsCreatorConfiguration;

    public constructor(input: IApiDoc, configuration: ISourceCodeDocsCreatorConfiguration) {
        this.__input = input;
        this.__configuration = configuration;
    }

    public async start(): Promise<Result<IPagePacket, Error>> {
        /* --- Load Theme --- */
        const themeLoader: IThemeLoader = new ThemeLoader(this.__configuration);
        const themeLoadingOpResult = await themeLoader.start();

        if (themeLoadingOpResult.err)
            return themeLoadingOpResult;

        /* --- Create page package --- */
        const pagePackageCreator: IPagePackageCreator = new PagePackageCreator(this.__input, this.__configuration);
        const pagePackageCreatorOpResult = await pagePackageCreator.start();

        if (pagePackageCreatorOpResult.err)
            return pagePackageCreatorOpResult;

        const pagePackage: IPagePacket = pagePackageCreatorOpResult.val;

        /* --- Create page package index --- */
        const pagePackageIndexCreator: IPagePackageIndexCreator = new PagePackageIndexCreator({
            pagePackage,
        });
        const pagePackageIndexCreatorOpResult = await pagePackageIndexCreator.start();

        if (pagePackageIndexCreatorOpResult.err)
            return pagePackageIndexCreatorOpResult;

        pagePackage.index = pagePackageIndexCreatorOpResult.val;

        /* --- Render contents of page package --- */
        const pagePackageRenderer: IPagePackageRenderer = new PagePackageRenderer(
            pagePackage,
            themeLoadingOpResult.val
        );
        const pagePacketRendererOpResult = await pagePackageRenderer.start();

        if (pagePacketRendererOpResult.err)
            return pagePacketRendererOpResult;

        /* --- Write page package to disk --- */
        const pagePacketWriter = new PagePackageWriter({
            configuration: this.__configuration,
            pagePackage
        });

        const pagePacketWriterOpResult = await pagePacketWriter.start();

        if (pagePacketWriterOpResult.err)
            return pagePacketWriterOpResult;

        return new Ok(pagePacketWriterOpResult.val);
    }
};

export { SourceCodeDocsCreator };
