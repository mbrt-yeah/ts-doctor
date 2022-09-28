import { IPage } from "./page/i-page";
import { IPageFolder } from "./page-folder/i-page-folder";
import { IPagePackageIndex } from "../page-package-index/i-page-package-index";

interface IPagePacketParameters {
    basePath: string,
    index?: IPagePackageIndex,
    root: IPage | IPageFolder,
};

export { IPagePacketParameters };
