import { TInfinity } from "../t-infinity";
import { TItemType } from "../../file-system/item/t-item-type";
import { TPageFolderType } from "../page-folder-schema/t-page-folder-type";
import { TPageType } from "../page-schema/t-page-type";

interface IItemSchemaParameters {
    cardinality: number | TInfinity,
    name: string,
    subType: TPageFolderType | TPageType;
    type: TItemType,
};

export { IItemSchemaParameters };
