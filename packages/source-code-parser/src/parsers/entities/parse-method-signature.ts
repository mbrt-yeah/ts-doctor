import { IMethodSignatureDoc } from "@ts-doctor/source-code-parser-result-model";
import { MethodSignature } from "ts-morph";
import { TParserEntity } from "./t-parser-entity";

const parseMethodSignature: TParserEntity<
    MethodSignature,
    IMethodSignatureDoc
> = function(node: MethodSignature): IMethodSignatureDoc {

    const returnType = node.getReturnType();

    return {
        entityType: "method-signature",
        modifiers: [],
        name: node.getName(),
        parameters: [],
        returnsType: returnType.getText(),
        sourceFilePath: "",
        sourceFull: node.getFullText(),
    };
};

export { parseMethodSignature };
