import { IFile } from "../file/i-file";
import { IFolderParameters } from "./i-folder-parameters";
import { IItem } from "../item/i-item";

interface IFolder<T = (IFile<any> | IFolder<any>)[]> extends IFolderParameters<T>, IItem {};

export { IFolder };
