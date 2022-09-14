import { IDocInterface } from "../../models/i-doc-interface";
import { InterfaceDeclaration, SyntaxKind } from "ts-morph";
import { parseHeritageClause } from "./parse-heritage-clause";
import { parseMethodSignatures } from "./parse-method-signatures";
import { parseModifiers } from "./parse-modifiers";
import { parsePropertySignatures } from "./parse-property-signatures";
import { parseSourceFile } from "../files/parse-source-file";
import { TParserEntity } from "./t-parser-entity";

const parseInterface: TParserEntity<
    InterfaceDeclaration,
    IDocInterface
> = function(node: InterfaceDeclaration): IDocInterface {
    return {
        entityType:         "interface",
        extends:            parseHeritageClause(node, SyntaxKind.ExtendsKeyword),
        methodSignatures:   parseMethodSignatures( node.getMethods() ),
        modifiers:          parseModifiers( node.getModifiers() ),
        name:               node.getName(),
        propertySignatures: parsePropertySignatures( node.getProperties() ),
        sourceFile:         parseSourceFile(node),
        sourceFull:         node.getFullText(),
    };
};

export { parseInterface };
