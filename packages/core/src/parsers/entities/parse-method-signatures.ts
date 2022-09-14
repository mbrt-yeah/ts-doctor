import { IDocMethodSignature } from "../../models/i-doc-method-signature";
import { MethodSignature } from "ts-morph";
import { parseMethodSignature } from "./parse-method-signature";
import { TParserEntities } from "./t-parser-entities";

const parseMethodSignatures: TParserEntities<
    MethodSignature,
    IDocMethodSignature
> = function(nodes: MethodSignature[]): IDocMethodSignature[] {
    const methodSignatures: IDocMethodSignature[] = [];

    for (const methodSignature of nodes)
        methodSignatures.push( parseMethodSignature(methodSignature) );

    return methodSignatures;
};

export { parseMethodSignatures };
