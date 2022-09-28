import { IApiDoc } from "@ts-doctor/source-code-parser-result-model";
import { ISourceCodeParser } from "./i-source-code-parser";
import { ISourceCodeParserParameters } from "./i-source-code-parser-parameters";
import { Result } from "ts-results";
import { SourceCodeParser } from "./source-code-parser";

async function parseSourceCode(
    parameters: ISourceCodeParserParameters
): Promise< Result<IApiDoc, Error> > {
    const parser: ISourceCodeParser = new SourceCodeParser(parameters);
    return parser.start();
}

export { parseSourceCode };
