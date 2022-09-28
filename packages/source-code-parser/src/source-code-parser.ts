import { IApiDoc, ApiDoc, IEntityDoc } from "@ts-doctor/source-code-parser-result-model";
import { ISourceCodeParser } from "./i-source-code-parser";
import { ISourceCodeParserParameters } from "./i-source-code-parser-parameters";
import { Node, Project, SourceFile, ts } from "ts-morph";
import { Ok, Result } from "ts-results";
import { visitNode } from "./visitors/visit-node";

class SourceCodeParser implements ISourceCodeParser {
    public sourceFilePaths: string[];
    private __project: Project;

    public constructor(parameters: ISourceCodeParserParameters) {
        this.sourceFilePaths = parameters.sourceFilePaths;
        this.__project = new Project();
        this.__project.addSourceFilesAtPaths(this.sourceFilePaths);
    }

    public async start(): Promise< Result<IApiDoc, Error> > {
        const sourceFiles: SourceFile[] = this.__project.getSourceFiles();

        const apiDoc: IApiDoc = new ApiDoc();

        for (const sourceFile of sourceFiles) {
            sourceFile.forEachChild((node: Node<ts.Node>): void => {
                const entityDoc: IEntityDoc | undefined = visitNode(node);

                if (entityDoc === undefined)
                    return;

                return apiDoc.addOneEntityDoc(entityDoc);
            });
        }

        return Ok(apiDoc);
    }
};

export { SourceCodeParser };
