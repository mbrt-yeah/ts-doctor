import { ConstructorDeclaration } from "ts-morph";
import { IDocClassConstructor } from "../../models/i-doc-class-constructor";
import { parseConstructor } from "./parse-constructor";
import { TParserEntities } from "./t-parser-entities";

const parseConstructors: TParserEntities<
    ConstructorDeclaration, 
    IDocClassConstructor
> = function(nodes: ConstructorDeclaration[]): IDocClassConstructor[] {
    const cstrs: IDocClassConstructor[] = [];

    for (const cstrDeclaration of nodes)
        cstrs.push( parseConstructor(cstrDeclaration) );

    return cstrs;
};

export { parseConstructors };
