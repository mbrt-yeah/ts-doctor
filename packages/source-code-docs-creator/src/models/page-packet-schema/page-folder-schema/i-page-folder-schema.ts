import { IItemSchema } from "../item-schema/i-item-schema";
import { IPageFolderSchemaParameters } from "./i-page-folder-schema-parameters";

interface IPageFolderSchema extends IPageFolderSchemaParameters, IItemSchema {};

export { IPageFolderSchema };
