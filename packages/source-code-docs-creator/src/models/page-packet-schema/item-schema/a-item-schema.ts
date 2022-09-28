import { IItemSchema } from "./i-item-schema";
import { IItemSchemaParameters } from "./i-item-schema-parameters";
import { TItemType } from "../../file-system/item/t-item-type";
import { TPageFolderType } from "../page-folder-schema/t-page-folder-type";
import { TPageType } from "../page-schema/t-page-type";

class AItemSchema implements IItemSchema {
    public cardinality: number | "infinity";
    public name: string;
    public subType: TPageFolderType | TPageType;
    public type: TItemType;

    public constructor(parameters: IItemSchemaParameters) {
        this.cardinality = parameters.cardinality;
        this.name = parameters.name;
        this.subType = parameters.subType;
        this.type = parameters.type;
    }
};

export { AItemSchema };
