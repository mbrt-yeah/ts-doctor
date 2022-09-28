import { IApiDoc } from "@ts-doctor/source-code-parser-result-model";
import { ISourceCodeParserParameters, parseSourceCode } from "@ts-doctor/source-code-parser";
import { Result } from "ts-results";

const testSourceCodeParser = async function(
    parameters: ISourceCodeParserParameters
): Promise<Result<IApiDoc, Error>> {
    return parseSourceCode(parameters);
}

export { testSourceCodeParser };
