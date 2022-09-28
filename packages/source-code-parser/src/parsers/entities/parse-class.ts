import { ClassDeclaration, SyntaxKind } from "ts-morph";
import { IClassDoc } from "@ts-doctor/source-code-parser-result-model";
import { parseConstructors } from "./parse-constructors";
import { parseHeritageClause } from "./parse-heritage-clause";
import { parseMethods } from "./parse-methods";
import { parseModifiers } from "./parse-modifiers";
import { parseProperties } from "./parse-properties";
import { parseSourceFile } from "../files/parse-source-file";
import { TParserEntity } from "./t-parser-entity";

const parseClass: TParserEntity<
    ClassDeclaration,
    IClassDoc
> = function(node: ClassDeclaration): IClassDoc {
    return {
        cstrs:          parseConstructors( node.getConstructors() ),
        entityType:     "class",
        extends:        parseHeritageClause(node, SyntaxKind.ExtendsKeyword),
        implements:     parseHeritageClause(node, SyntaxKind.ImplementsKeyword),
        methods:        parseMethods( node.getMethods() ),
        modifiers:      parseModifiers(node.getModifiers()),
        name:           node.getName() || "",
        properties:     parseProperties( node.getProperties() ),
        sourceFilePath: parseSourceFile(node),
        sourceFull:     node.getFullText(),
    };
};

export { parseClass };
