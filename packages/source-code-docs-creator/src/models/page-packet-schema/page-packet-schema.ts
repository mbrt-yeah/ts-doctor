import { IPageFolderSchema } from "./page-folder-schema/i-page-folder-schema";
import { IPageSchema } from "./page-schema/i-page-schema";
import { IPagePacketSchema } from "./i-page-packet-schema";
import { IPagePacketSchemaParameters } from "./i-page-packet-schema-parameters";

class PaginationSchema implements IPagePacketSchema {
    public root: IPageSchema | IPageFolderSchema;

    public constructor(parameters: IPagePacketSchemaParameters) {
        this.root = parameters.root;
    }
};

export { PaginationSchema };
