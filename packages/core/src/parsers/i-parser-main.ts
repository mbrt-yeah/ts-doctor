import { IDocRoot } from "../models/i-doc-root";
import { IParserMainParameters } from "./i-parser-main-parameters";
import { Result } from "ts-results";

interface IParserMain extends IParserMainParameters {
    start(): Promise< Result<IDocRoot, Error> >;
};

export { IParserMain };
