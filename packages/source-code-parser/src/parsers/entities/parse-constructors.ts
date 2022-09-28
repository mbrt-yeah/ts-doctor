import { ConstructorDeclaration } from "ts-morph";
import { IClassConstructorDoc } from "@ts-doctor/source-code-parser-result-model";
import { parseConstructor } from "./parse-constructor";
import { TParserEntities } from "./t-parser-entities";

const parseConstructors: TParserEntities<
    ConstructorDeclaration, 
    IClassConstructorDoc
> = function(nodes: ConstructorDeclaration[]): IClassConstructorDoc[] {
    const cstrs: IClassConstructorDoc[] = [];

    for (const cstrDeclaration of nodes)
        cstrs.push( parseConstructor(cstrDeclaration) );

    return cstrs;
};

export { parseConstructors };
