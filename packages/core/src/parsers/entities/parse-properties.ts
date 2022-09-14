import { IDocProperty } from "../../models/i-doc-property";
import { parseProperty } from "./parse-property";
import { PropertyDeclaration } from "ts-morph";
import { TParserEntities } from "./t-parser-entities";

const parseProperties: TParserEntities<
    PropertyDeclaration,
    IDocProperty
> = function(nodes: PropertyDeclaration[]): IDocProperty[] {
    const properties: IDocProperty[] = [];

    for (const propertyDeclaration of nodes)
        properties.push( parseProperty(propertyDeclaration) );

    return properties;
};

export { parseProperties };
