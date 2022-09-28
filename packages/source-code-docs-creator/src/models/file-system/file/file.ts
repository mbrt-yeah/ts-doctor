import { AItem } from "../item/a-item";
import { IFile } from "./i-file";
import { IFileParameters } from "./i-file-parameters";

class File<T = string> extends AItem implements IFile<T> {
    public content?: T | undefined;

    public constructor(parameters: IFileParameters<T>) {
        super(parameters);
        this.content = parameters.content;
    }
};

export { File };
