import { AItem } from "../item/a-item";
import { IFile } from "../file/i-file";
import { IFolder } from "./i-folder";
import { IFolderParameters } from "./i-folder-parameters";

class Folder<T = (IFile<any> | IFolder<any>[])> extends AItem implements IFolder<T> {
    public contents: T;

    public constructor(parameters: IFolderParameters<T>) {
        super(parameters);
        this.contents = parameters.contents;
    }
}

export { Folder };
