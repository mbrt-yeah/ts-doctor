import { AItemSchema } from "../item-schema/a-item-schema";
import { IPageSchema } from "./i-page-schema";
import { IPageSchemaParameters } from "./i-page-schema-parameters";

class PageSchema extends AItemSchema implements IPageSchema {
    public title: string;

    public constructor(parameters: IPageSchemaParameters) {
        super(parameters);
        this.title = parameters.title;
    }
};

export { PageSchema };
