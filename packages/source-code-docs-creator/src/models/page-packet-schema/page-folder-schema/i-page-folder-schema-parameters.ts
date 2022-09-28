import { IItemSchemaParameters } from "../item-schema/i-item-schema-parameters";
import { IPageFolderSchema } from "./i-page-folder-schema";
import { IPageSchema } from "../page-schema/i-page-schema";

interface IPageFolderSchemaParameters extends IItemSchemaParameters {
    contents: (IPageSchema | IPageFolderSchema)[],
};

export { IPageFolderSchemaParameters };
