import { parseModifier } from "./parse-modifier";
import { TModifier } from "../../models/t-modifier";
import { TParserEntities } from "./t-parser-entities";
import { ts, Node } from "ts-morph";

const parseModifiers: TParserEntities<
    Node<ts.Modifier>,
    TModifier
> = function(modifiers: Node<ts.Modifier>[]): TModifier[] {
    const modifiersParsed: TModifier[] = [];

    for (const modifier of modifiers)
        modifiersParsed.push( parseModifier(modifier) );

    return modifiersParsed;
};

export { parseModifiers };
