import { AItemSchema } from "../item-schema/a-item-schema";
import { IPageFolderSchema } from "./i-page-folder-schema";
import { IPageFolderSchemaParameters } from "./i-page-folder-schema-parameters";
import { IPageSchema } from "../page-schema/i-page-schema";

class PageFolderSchema extends AItemSchema implements IPageFolderSchema {
    public contents: (IPageSchema | IPageFolderSchema)[];

    public constructor(parameters: IPageFolderSchemaParameters) {
        super(parameters);
        this.contents = parameters.contents;
    }
};

export { PageFolderSchema };
