import { IItemParameters } from "../item/i-item-parameters";

interface IFileParameters<T = string> extends IItemParameters {
    content?: T,
};

export { IFileParameters };
