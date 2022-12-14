import { TModifier } from "@ts-doctor/source-code-parser-result-model";
import { TParserEntity } from "./t-parser-entity";
import { ts, Node } from "ts-morph";

const parseModifier: TParserEntity<
    Node<ts.Modifier>,
    TModifier
> = function(modifiers: Node<ts.Modifier>): TModifier {
    return modifiers.getText() as TModifier;
};

export { parseModifier };
