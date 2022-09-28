import { IMethodDoc } from "@ts-doctor/source-code-parser-result-model";
import { MethodDeclaration } from "ts-morph";
import { parseMethod } from "./parse-method";
import { TParserEntities } from "./t-parser-entities";

const parseMethods: TParserEntities<
    MethodDeclaration,
    IMethodDoc
> = function(nodes: MethodDeclaration[]): IMethodDoc[] {
    const methods: IMethodDoc[] = [];

    for (const methodDeclaration of nodes)
        methods.push( parseMethod(methodDeclaration) );

    return methods;
};

export { parseMethods };
