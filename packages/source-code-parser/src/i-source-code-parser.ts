import { IApiDoc } from "@ts-doctor/source-code-parser-result-model";
import { ISourceCodeParserParameters } from "./i-source-code-parser-parameters";
import { Result } from "ts-results";

interface ISourceCodeParser extends ISourceCodeParserParameters {
    start(): Promise< Result<IApiDoc, Error> >;
};

export { ISourceCodeParser };
