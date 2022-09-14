import { IDocEntity } from "../models/i-doc-entity";
import { Node, SyntaxKind, ts } from "ts-morph";
import { ParserEntityMap } from "../parsers/entities/parser-entity-map";

function visitNode(node: Node<ts.Node>, docEntities: IDocEntity[]): IDocEntity[] {
    const kind: SyntaxKind = node.getKind();

    const parser = ParserEntityMap.get(kind);

    if (parser !== undefined || typeof parser === "function") {
        const docEntity: IDocEntity = parser(node);
        docEntities.push(docEntity);
    }

    return docEntities;
};

export { visitNode };
