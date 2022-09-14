import { IDocMethod } from "../../models/i-doc-method";
import { MethodDeclaration } from "ts-morph";
import { parseModifiers } from "./parse-modifiers";
import { TParserEntity } from "./t-parser-entity";

const parseMethod: TParserEntity<
    MethodDeclaration,
    IDocMethod
> = function(node: MethodDeclaration): IDocMethod {

    const returnType = node.getReturnType();

    return {
        entityType: "method",
        modifiers: parseModifiers( node.getModifiers() ),
        name: node.getName(),
        returnsType: returnType.getText(),
        sourceFull: node.getFullText(),
    };
};

export { parseMethod };
