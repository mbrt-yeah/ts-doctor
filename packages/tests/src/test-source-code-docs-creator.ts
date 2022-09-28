import { createSourceCodeDocs, ISourceCodeDocsCreatorConfiguration } from "@ts-doctor/source-code-docs-creator";
import { ISourceCodeParserParameters } from "@ts-doctor/source-code-parser";
import { Ok, Result } from "ts-results";
import { testSourceCodeParser } from "./test-source-code-parser";

const testSourceCodeDocsCreator = async function(parameters: {
    parser: ISourceCodeParserParameters,
    creator: ISourceCodeDocsCreatorConfiguration,
}): Promise<Result<any, Error>> {

    const sourceCodeParserOpResult = await testSourceCodeParser(parameters.parser);

    if (sourceCodeParserOpResult.err)
        return sourceCodeParserOpResult;

    const docsCreatorOpResult = await createSourceCodeDocs(
        sourceCodeParserOpResult.val, 
        parameters.creator
    );

    if (docsCreatorOpResult.err)
        return docsCreatorOpResult;

    return new Ok(docsCreatorOpResult.val);
}

export { testSourceCodeDocsCreator };
