import { IFolder } from "../../file-system/folder/i-folder";
import { IPage } from "../page/i-page";
import { IPageFolderParameters } from "./i-page-folder-parameters";

interface IPageFolder extends IPageFolderParameters, IFolder<(IPageFolder | IPage<any>)[]> {};

export { IPageFolder };
