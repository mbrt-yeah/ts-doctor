import { File } from "../../file-system/file/file";
import { TPageType } from "../../page-packet-schema";
import { IPage } from "./i-page";
import { IPageParameters } from "./i-page-parameters";

class Page<T = string> extends File<T> implements IPage<T> {
    public contentSelector: string;
    public level: number;
    public subType: TPageType;
    public title: string;

    public constructor(parameters: IPageParameters<T>) {
        super(parameters);
        this.contentSelector = parameters.contentSelector;
        this.level = parameters.level;
        this.subType = parameters.subType;
        this.title = parameters.title;
    }
};

export { Page };
