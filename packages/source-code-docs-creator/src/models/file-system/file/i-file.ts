import { IItem } from "../item/i-item";
import { IFileParameters } from "./i-file-parameters";

interface IFile<T = string> extends IFileParameters<T>, IItem {};

export { IFile };
