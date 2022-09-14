import { IDocRoot } from "./models/i-doc-root";
import { IParserMainParameters } from "./parsers/i-parser-main-parameters";
import { ParserMain } from "./parsers/parser-main";
import { Result } from "ts-results";

async function parse(parameters: IParserMainParameters): Promise< Result<IDocRoot, Error> > {
    const parser = new ParserMain(parameters);
    return parser.start();
}

export { parse };
