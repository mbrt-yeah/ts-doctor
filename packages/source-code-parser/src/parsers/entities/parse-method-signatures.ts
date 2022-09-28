import { IMethodSignatureDoc } from "@ts-doctor/source-code-parser-result-model";
import { MethodSignature } from "ts-morph";
import { parseMethodSignature } from "./parse-method-signature";
import { TParserEntities } from "./t-parser-entities";

const parseMethodSignatures: TParserEntities<
    MethodSignature,
    IMethodSignatureDoc
> = function(nodes: MethodSignature[]): IMethodSignatureDoc[] {
    const methodSignatures: IMethodSignatureDoc[] = [];

    for (const methodSignature of nodes)
        methodSignatures.push( parseMethodSignature(methodSignature) );

    return methodSignatures;
};

export { parseMethodSignatures };
