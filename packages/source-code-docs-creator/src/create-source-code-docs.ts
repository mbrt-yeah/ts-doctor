import { IApiDoc } from "@ts-doctor/source-code-parser-result-model";
import { IPagePacket } from "./models/page-packet/i-page-packet";
import { ISourceCodeDocsCreatorConfiguration } from "./models/configuration/i-source-code-docs-creator-configuration";
import { Result } from "ts-results";
import { SourceCodeDocsCreator } from "./source-code-docs-creator";

function createSourceCodeDocs(
    input: IApiDoc,
    configuration: ISourceCodeDocsCreatorConfiguration
): Promise<Result<IPagePacket, Error>> {
    const creator = new SourceCodeDocsCreator(input, configuration);
    return creator.start();
}

export { createSourceCodeDocs };
