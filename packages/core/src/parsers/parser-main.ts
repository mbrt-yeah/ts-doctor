import { IDocEntity } from "../models/i-doc-entity";
import { IDocRoot } from "../models/i-doc-root";
import { IParserMain } from "./i-parser-main";
import { IParserMainParameters } from "./i-parser-main-parameters";
import { Node, Project, SourceFile, ts } from "ts-morph";
import { Ok, Result } from "ts-results";
import { visitNode } from "../visitors/visit-node";

class ParserMain implements IParserMain {
    public sourceFilePaths: string[];

    private __project: Project;

    public constructor(parameters: IParserMainParameters) {
        this.sourceFilePaths = parameters.sourceFilePaths;
        this.__project = new Project();
        this.__project.addSourceFilesAtPaths(this.sourceFilePaths);
    }

    public async start(): Promise< Result<IDocRoot, Error> > {
        const sourceFiles: SourceFile[] = this.__project.getSourceFiles();
        const entities: IDocEntity[] = [];

        for (const sourceFile of sourceFiles) {
            sourceFile.forEachChild((node: Node<ts.Node>) => {
                const docEntities: IDocEntity[] = visitNode(node, []);
                entities.push( ... docEntities );
            });
        }

        return Ok({ entities });
    }
};

export { ParserMain };
