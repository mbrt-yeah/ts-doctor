import { IPageFolderSchema } from "./page-folder-schema/i-page-folder-schema";
import { IPageSchema } from "./page-schema/i-page-schema";

interface IPagePacketSchemaParameters {
    root: IPageSchema | IPageFolderSchema;
};

export { IPagePacketSchemaParameters };
