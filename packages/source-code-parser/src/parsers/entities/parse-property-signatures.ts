import { IPropertySignatureDoc } from "@ts-doctor/source-code-parser-result-model";
import { parsePropertySignature } from "./parse-property-signature";
import { PropertySignature } from "ts-morph";
import { TParserEntities } from "./t-parser-entities";

const parsePropertySignatures: TParserEntities<
    PropertySignature,
    IPropertySignatureDoc
> = function(nodes: PropertySignature[]): IPropertySignatureDoc[] {
    const propertySignatures: IPropertySignatureDoc[] = [];

    for (const propertySignature of nodes)
        propertySignatures.push( parsePropertySignature(propertySignature) );

    return propertySignatures;
};

export { parsePropertySignatures };
