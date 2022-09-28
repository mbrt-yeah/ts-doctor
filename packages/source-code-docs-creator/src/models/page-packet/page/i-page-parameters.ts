import { IFileParameters } from "../../file-system/file/i-file-parameters";
import { TPageType } from "../../page-packet-schema/page-schema/t-page-type";

interface IPageParameters<T = string>extends IFileParameters<T> {
    level: number,
    contentSelector: string,
    subType: TPageType,
    title: string,
};

export { IPageParameters };
