import { Folder } from "../../file-system/folder/folder";
import { TPageFolderType } from "../../page-packet-schema";
import { IPage } from "../page/i-page";
import { IPageFolder } from "./i-page-folder";
import { IPageFolderParameters } from "./i-page-folder-parameters";

class PageFolder extends Folder<(IPageFolder | IPage<any>)[]> implements IPageFolder {
    public level: number;
    public subType: TPageFolderType;

    public constructor(parameters: IPageFolderParameters) {
        super(parameters);
        this.level = parameters.level;
        this.subType = parameters.subType;
    }
};

export { PageFolder };
