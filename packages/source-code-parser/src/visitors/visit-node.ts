import { IEntityDoc } from "@ts-doctor/source-code-parser-result-model";
import { Node, ts } from "ts-morph";
import { ParserEntityMap } from "../parsers/entities/parser-entity-map";

function visitNode(node: Node<ts.Node>): IEntityDoc | undefined {
    const parser = ParserEntityMap.get( node.getKind() );

    if (parser === undefined || typeof parser !== "function")
        return;

    return parser(node);
};

export { visitNode };
