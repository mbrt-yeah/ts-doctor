import { IMethodDoc } from "@ts-doctor/source-code-parser-result-model";
import { MethodDeclaration } from "ts-morph";
import { parseModifiers } from "./parse-modifiers";
import { TParserEntity } from "./t-parser-entity";

const parseMethod: TParserEntity<
    MethodDeclaration,
    IMethodDoc
> = function(node: MethodDeclaration): IMethodDoc {

    const returnType = node.getReturnType();

    return {
        entityType: "method",
        modifiers: parseModifiers( node.getModifiers() ),
        name: node.getName(),
        parameters: [],
        returnsType: returnType.getText(),
        sourceFilePath: "",
        sourceFull: node.getFullText(),
    };
};

export { parseMethod };
