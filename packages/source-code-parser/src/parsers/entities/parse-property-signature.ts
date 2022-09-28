import { IPropertySignatureDoc } from "@ts-doctor/source-code-parser-result-model";
import { PropertySignature } from "ts-morph";
import { TParserEntity } from "./t-parser-entity";
import { parseModifiers } from "./parse-modifiers";

const parsePropertySignature: TParserEntity<
    PropertySignature,
    IPropertySignatureDoc
> = function(node: PropertySignature): IPropertySignatureDoc {
    return {
        entityType:     "property-signature",
        modifiers:      parseModifiers( node.getModifiers() ),
        name:           node.getName(),
        sourceFilePath: "",
        sourceFull:     node.getFullText(),
        type:           node.getType().getText(),
    };
};

export { parsePropertySignature };
