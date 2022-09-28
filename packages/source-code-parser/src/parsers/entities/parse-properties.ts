import { IPropertyDoc } from "@ts-doctor/source-code-parser-result-model";
import { parseProperty } from "./parse-property";
import { PropertyDeclaration } from "ts-morph";
import { TParserEntities } from "./t-parser-entities";

const parseProperties: TParserEntities<
    PropertyDeclaration,
    IPropertyDoc
> = function(nodes: PropertyDeclaration[]): IPropertyDoc[] {
    const properties: IPropertyDoc[] = [];

    for (const propertyDeclaration of nodes)
        properties.push( parseProperty(propertyDeclaration) );

    return properties;
};

export { parseProperties };
