import { IItemParameters } from "../item/i-item-parameters";

interface IFolderParameters<T> extends IItemParameters {
    contents: T,
};

export { IFolderParameters };
