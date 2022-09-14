import { IDocMethodSignature } from "../../models/i-doc-method-signature";
import { MethodSignature } from "ts-morph";
import { TParserEntity } from "./t-parser-entity";

const parseMethodSignature: TParserEntity<
    MethodSignature,
    IDocMethodSignature
> = function(node: MethodSignature): IDocMethodSignature {

    const returnType = node.getReturnType();

    return {
        entityType: "method-signature",
        name: node.getName(),
        returnsType: returnType.getText(),
        sourceFull: node.getFullText(),
    };
};

export { parseMethodSignature };
