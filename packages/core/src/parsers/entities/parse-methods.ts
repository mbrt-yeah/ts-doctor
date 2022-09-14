import { IDocMethod } from "../../models/i-doc-method";
import { MethodDeclaration } from "ts-morph";
import { parseMethod } from "./parse-method";
import { TParserEntities } from "./t-parser-entities";

const parseMethods: TParserEntities<
    MethodDeclaration,
    IDocMethod
> = function(nodes: MethodDeclaration[]): IDocMethod[] {
    const methods: IDocMethod[] = [];

    for (const methodDeclaration of nodes)
        methods.push( parseMethod(methodDeclaration) );

    return methods;
};

export { parseMethods };
