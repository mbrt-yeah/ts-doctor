import { FILE_OR_FOLDER_NAME_VARIABLES } from "../../constants";
import { IEntityDoc } from "@ts-doctor/source-code-parser-result-model";
import { IFileAndFolderNamer } from "./i-file-and-folder-namer";
import { IFileAndFolderNamerParameters } from "./i-file-and-folder-namer-parameters";
import { Ok, Result } from "ts-results";

class FileAndFolderNamer implements IFileAndFolderNamer {

    public static namingStrategies = new Map<string, (entityDoc: IEntityDoc, number?: number) => string>([
        ["#", (entityDoc: IEntityDoc, number?: number): string => number + ""],
        ["name", (entityDoc: IEntityDoc, number?: number): string => {
            return entityDoc.name.toLowerCase();
        }],
    ]);

    public entityDoc?: IEntityDoc | undefined;
    public fileOrFolderNameRaw: string;
    public number?: number | undefined;

    public constructor(parameters: IFileAndFolderNamerParameters) {
        this.entityDoc = parameters.entityDoc;
        this.fileOrFolderNameRaw = parameters.fileOrFolderNameRaw;
        this.number = parameters.number;
    }

    public async start(): Promise<Result<string, Error>> {
        if (!this.entityDoc)
            return new Ok(this.fileOrFolderNameRaw);

        const regex = new RegExp(FILE_OR_FOLDER_NAME_VARIABLES, "gim");
        const namingKeys: RegExpMatchArray | null = this.fileOrFolderNameRaw.match(regex);

        if (namingKeys === null)
            return new Ok(this.fileOrFolderNameRaw);

        let fileOrFolderName = "";

        for (const namingKey of namingKeys) {
            const namingStrategyFn = FileAndFolderNamer.namingStrategies.get(namingKey);

            if (!namingStrategyFn || typeof namingStrategyFn !== "function") {
                fileOrFolderName += namingKey;
                continue;
            }

            fileOrFolderName += namingStrategyFn(this.entityDoc, this.number);
        }

        return new Ok(fileOrFolderName);
    }
};

export { FileAndFolderNamer };
