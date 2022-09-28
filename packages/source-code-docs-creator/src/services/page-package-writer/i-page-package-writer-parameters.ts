import { IPagePacket } from "../../models/page-packet/i-page-packet";
import { ISourceCodeDocsCreatorConfiguration } from "../../models/configuration/i-source-code-docs-creator-configuration";

interface IPagePackageWriterParameters {
    configuration: ISourceCodeDocsCreatorConfiguration,
    pagePackage: IPagePacket;
};

export { IPagePackageWriterParameters };
