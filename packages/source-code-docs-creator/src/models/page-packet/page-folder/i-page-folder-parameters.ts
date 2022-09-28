import { IFolderParameters } from "../../file-system";
import { IPage } from "../page/i-page";
import { IPageFolder } from "./i-page-folder";
import { TPageFolderType } from "../../page-packet-schema/page-folder-schema/t-page-folder-type";

interface IPageFolderParameters extends IFolderParameters<(IPageFolder | IPage<any>)[]> {
    level: number,
    subType: TPageFolderType,
};

export { IPageFolderParameters };
