import { Node, SourceFile, ts } from "ts-morph";

const parseSourceFile = function(node: Node<ts.Node>): string {
    const sourceFile: SourceFile = node.getSourceFile();

    if (!sourceFile)
        return "";

    return sourceFile.getFilePath();
};

export { parseSourceFile };
