import { IPropertyDoc } from "@ts-doctor/source-code-parser-result-model";
import { PropertyDeclaration } from "ts-morph";
import { TParserEntity } from "./t-parser-entity";
import { parseModifiers } from "./parse-modifiers";

const parseProperty: TParserEntity<
    PropertyDeclaration,
    IPropertyDoc
> = function(node: PropertyDeclaration): IPropertyDoc {
    return {
        entityType: "property",
        modifiers: parseModifiers( node.getModifiers() ),
        name: node.getName(),
        sourceFull: node.getFullText(),
        sourceFilePath: "",
        type: node.getType().getText(),
    };
};

export { parseProperty };
