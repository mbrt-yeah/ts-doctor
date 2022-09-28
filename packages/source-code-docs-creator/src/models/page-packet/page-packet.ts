import { IPage } from "./page/i-page";
import { IPageFolder } from "./page-folder/i-page-folder";
import { IPagePackageIndex } from "../page-package-index/i-page-package-index";
import { IPagePacket } from "./i-page-packet";
import { IPagePacketParameters } from "./i-page-packet-parameters";

class PagePacket implements IPagePacket {
    public basePath: string;
    public index: IPagePackageIndex | undefined;
    public root: IPage | IPageFolder;

    public constructor(parameters: IPagePacketParameters) {
        this.basePath = parameters.basePath;
        this.index = parameters.index;
        this.root = parameters.root;
    }
};

export { PagePacket };
