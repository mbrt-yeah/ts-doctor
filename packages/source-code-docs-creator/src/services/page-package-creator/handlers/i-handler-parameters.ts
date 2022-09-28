import { IApiDoc } from "@ts-doctor/source-code-parser-result-model";
import { IItemSchema } from "../../../models/page-packet-schema/item-schema/i-item-schema";
import { IPageFolder } from "../../../models/page-packet/page-folder/i-page-folder";
import { ISourceCodeDocsCreatorConfiguration } from "../../../models/configuration/i-source-code-docs-creator-configuration";

interface IHandlerParameters {
    apiDoc: IApiDoc,
    configuration: ISourceCodeDocsCreatorConfiguration,
    itemSchema: IItemSchema,
    parentFolder: IPageFolder,
};

export { IHandlerParameters };
