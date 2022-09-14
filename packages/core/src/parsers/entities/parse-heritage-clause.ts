import { ClassDeclaration, HeritageClause, InterfaceDeclaration, SyntaxKind } from "ts-morph";
import { TParserEntity } from "./t-parser-entity";

const parseHeritageClause: TParserEntity<
    ClassDeclaration | InterfaceDeclaration, 
    string[]
> = function(
    declaration: ClassDeclaration | InterfaceDeclaration,
    kind: SyntaxKind.ExtendsKeyword | SyntaxKind.ImplementsKeyword
): string[] {
    const heritageClause: HeritageClause | undefined = declaration.getHeritageClauseByKind(kind);

    if (heritageClause === undefined)
        return [];

    const typeNames: string[] = [];

    for (const typeNode of heritageClause.getTypeNodes())
        typeNames.push( typeNode.getText() );

    return typeNames;
};

export { parseHeritageClause }
