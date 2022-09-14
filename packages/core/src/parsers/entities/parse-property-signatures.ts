import { IDocPropertySignature } from "../../models/i-doc-property-signature";
import { parsePropertySignature } from "./parse-property-signature";
import { PropertySignature } from "ts-morph";
import { TParserEntities } from "./t-parser-entities";

const parsePropertySignatures: TParserEntities<
    PropertySignature,
    IDocPropertySignature
> = function(nodes: PropertySignature[]): IDocPropertySignature[] {
    const propertySignatures: IDocPropertySignature[] = [];

    for (const propertySignature of nodes)
        propertySignatures.push( parsePropertySignature(propertySignature) );

    return propertySignatures;
};

export { parsePropertySignatures };
