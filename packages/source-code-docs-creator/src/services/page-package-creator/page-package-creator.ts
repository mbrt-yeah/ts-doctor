import { basename } from "node:path";
import { DefaultDocFolderStructure } from "../../doc-folder-structures/default-doc-folder-structure";
import { handleItemSchema } from "./handlers/item-schema/handle-item-schema";
import { IApiDoc } from "@ts-doctor/source-code-parser-result-model";
import { IPageFolder } from "../../models/page-packet/page-folder/i-page-folder";
import { IPagePackageCreator } from "./i-page-package-creator";
import { IPagePacket } from "../../models/page-packet/i-page-packet";
import { ISourceCodeDocsCreatorConfiguration } from "../../models/configuration/i-source-code-docs-creator-configuration";
import { Ok, Result } from "ts-results";
import { PageFolder } from "../../models/page-packet/page-folder/page-folder";

class PagePackageCreator implements IPagePackageCreator {
    private __configuration: ISourceCodeDocsCreatorConfiguration;
    private __sourceCodeParserResult: IApiDoc;

    public constructor(sourceCodeParserResult: IApiDoc, configuration: ISourceCodeDocsCreatorConfiguration) {
        this.__configuration = configuration;
        this.__sourceCodeParserResult = sourceCodeParserResult;
    }

    public async start(): Promise<Result<IPagePacket, Error>> {
        const apiDoc = Object.assign({}, this.__sourceCodeParserResult);
        const pathAbs = this.__configuration.output.path;
        const name = basename(pathAbs);
        const pathRel = "";

        const parentFolder: IPageFolder = new PageFolder({
            contents: [],
            level: -1,
            name,
            pathAbs,
            pathRel,
            subType: "outputFolder",
            type: "folder",
        });

        const handleItemSchemaOpResult = await handleItemSchema({
            apiDoc,
            configuration: this.__configuration,
            itemSchema: DefaultDocFolderStructure.root,
            parentFolder,
        });

        if (handleItemSchemaOpResult.err)
            return handleItemSchemaOpResult;

        return Ok({
            basePath: pathAbs,
            root: handleItemSchemaOpResult.val,
        });
    }
};

export { PagePackageCreator };
