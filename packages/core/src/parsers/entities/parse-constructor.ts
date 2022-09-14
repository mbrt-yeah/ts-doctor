import { ConstructorDeclaration } from "ts-morph";
import { IDocClassConstructor } from "../../models/i-doc-class-constructor";
import { TParserEntity } from "./t-parser-entity";

const parseConstructor: TParserEntity<
    ConstructorDeclaration,
    IDocClassConstructor
> = function(node: ConstructorDeclaration): IDocClassConstructor {
    return {
        returnsType: "",
        entityType: "constructor",
    };
};

export { parseConstructor };
