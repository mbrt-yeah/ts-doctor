import { ConstructorDeclaration } from "ts-morph";
import { IClassConstructorDoc } from "@ts-doctor/source-code-parser-result-model";
import { TParserEntity } from "./t-parser-entity";

const parseConstructor: TParserEntity<
    ConstructorDeclaration,
    IClassConstructorDoc
> = function(node: ConstructorDeclaration): IClassConstructorDoc {
    return {
        entityType: "constructor",
        modifiers: [],
        name: "",
        parameters: [],
        returnsType: "",
        sourceFilePath: "",
        sourceFull: "",
    };
};

export { parseConstructor };
