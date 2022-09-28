import { IFile } from "../../file-system";
import { IPageParameters } from "./i-page-parameters";

interface IPage<T = string> extends IPageParameters<T>, IFile<T> {};

export { IPage };
