import { IDocPropertySignature } from "../../models/i-doc-property-signature";
import { PropertySignature } from "ts-morph";
import { TParserEntity } from "./t-parser-entity";
import { parseModifiers } from "./parse-modifiers";

const parsePropertySignature: TParserEntity<
    PropertySignature,
    IDocPropertySignature
> = function(node: PropertySignature): IDocPropertySignature {
    return {
        entityType: "property-signature",
        modifiers: parseModifiers( node.getModifiers() ),
        name: node.getName(),
        sourceFull: node.getFullText(),
        type: node.getType().getText(),
    };
};

export { parsePropertySignature };
