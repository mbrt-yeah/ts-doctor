import { IEntityDoc } from "@ts-doctor/source-code-parser-result-model";

interface IFileAndFolderNamerParameters {
    entityDoc?: IEntityDoc;
    fileOrFolderNameRaw: string;
    number?: number;
};

export { IFileAndFolderNamerParameters };
