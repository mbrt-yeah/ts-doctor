import { IDocProperty } from "../../models/i-doc-property";
import { PropertyDeclaration } from "ts-morph";
import { TParserEntity } from "./t-parser-entity";
import { parseModifiers } from "./parse-modifiers";

const parseProperty: TParserEntity<
    PropertyDeclaration,
    IDocProperty
> = function(node: PropertyDeclaration): IDocProperty {
    return {
        entityType: "property",
        modifiers: parseModifiers( node.getModifiers() ),
        name: node.getName(),
        sourceFull: node.getFullText(),
        type: node.getType().getText(),
    };
};

export { parseProperty };
