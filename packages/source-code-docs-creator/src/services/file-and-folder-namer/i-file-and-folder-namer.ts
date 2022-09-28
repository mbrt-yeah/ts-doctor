import { Result } from "ts-results";
import { IFileAndFolderNamerParameters } from "./i-file-and-folder-namer-parameters";

interface IFileAndFolderNamer extends IFileAndFolderNamerParameters {
    start(): Promise<Result<string, Error>>
};

export { IFileAndFolderNamer };
