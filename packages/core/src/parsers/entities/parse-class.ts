import { ClassDeclaration, HeritageClause, SyntaxKind } from "ts-morph";
import { IDocClass } from "../../models/i-doc-class";
import { parseConstructors } from "./parse-constructors";
import { parseMethods } from "./parse-methods";
import { parseModifiers } from "./parse-modifiers";
import { parseProperties } from "./parse-properties";
import { parseSourceFile } from "../files/parse-source-file";
import { TParserEntity } from "./t-parser-entity";
import { parseHeritageClause } from "./parse-heritage-clause";

const parseClass: TParserEntity<
    ClassDeclaration,
    IDocClass
> = function(node: ClassDeclaration): IDocClass {
    return {
        cstrs:      parseConstructors( node.getConstructors() ),
        entityType: "class",
        extends:    parseHeritageClause(node, SyntaxKind.ExtendsKeyword),
        implements: parseHeritageClause(node, SyntaxKind.ImplementsKeyword),
        methods:    parseMethods( node.getMethods() ),
        modifiers:  parseModifiers(node.getModifiers()),
        name:       node.getName(),
        properties: parseProperties( node.getProperties() ),
        sourceFile: parseSourceFile(node),
        sourceFull: node.getFullText(),
    };
};

export { parseClass };
