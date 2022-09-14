import { IDocSourceFile } from "../../models/i-doc-source-file";
import { Node, SourceFile, ts } from "ts-morph";

const parseSourceFile = function(node: Node<ts.Node>): IDocSourceFile {
    const sourceFile: SourceFile = node.getSourceFile();

    return {
        filePathFull: sourceFile.getFilePath(),
    }
};

export { parseSourceFile };
