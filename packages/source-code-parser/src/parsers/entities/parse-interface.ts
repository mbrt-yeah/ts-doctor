import { IInterfaceDoc } from "@ts-doctor/source-code-parser-result-model";
import { InterfaceDeclaration, SyntaxKind } from "ts-morph";
import { parseHeritageClause } from "./parse-heritage-clause";
import { parseMethodSignatures } from "./parse-method-signatures";
import { parseModifiers } from "./parse-modifiers";
import { parsePropertySignatures } from "./parse-property-signatures";
import { parseSourceFile } from "../files/parse-source-file";
import { TParserEntity } from "./t-parser-entity";

const parseInterface: TParserEntity<
    InterfaceDeclaration,
    IInterfaceDoc
> = function(node: InterfaceDeclaration): IInterfaceDoc {
    return {
        entityType:         "interface",
        extends:            parseHeritageClause(node, SyntaxKind.ExtendsKeyword),
        methodSignatures:   parseMethodSignatures( node.getMethods() ),
        modifiers:          parseModifiers( node.getModifiers() ),
        name:               node.getName(),
        propertySignatures: parsePropertySignatures( node.getProperties() ),
        sourceFilePath:     parseSourceFile(node),
        sourceFull:         node.getFullText(),
    };
};

export { parseInterface };
