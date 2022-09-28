import { IItemSchemaParameters } from "../item-schema";
import { TPageType } from "./t-page-type";

interface IPageSchemaParameters extends IItemSchemaParameters {
    subType: TPageType,
    title: string,
};

export { IPageSchemaParameters };
