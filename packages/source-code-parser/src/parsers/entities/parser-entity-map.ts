import { parseClass } from "./parse-class";
import { parseConstructor } from "./parse-constructor";
import { parseInterface } from "./parse-interface";
import { parseProperty } from "./parse-property";
import { TParserEntity } from "./t-parser-entity";

const ParserEntityMap = new Map< number, TParserEntity<any, any>>([
    [167, parseProperty],
    [171, parseConstructor],
    [257, parseClass],
    [258, parseInterface]
]);

export { ParserEntityMap };
