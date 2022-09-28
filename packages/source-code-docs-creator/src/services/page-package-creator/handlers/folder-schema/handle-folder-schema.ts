import { handleItemSchema } from "../item-schema/handle-item-schema";
import { IHandlerParameters } from "../i-handler-parameters";
import { IPageFolder } from "../../../../models/page-packet/page-folder/i-page-folder";
import { IPageFolderSchema } from "../../../../models/page-packet-schema/page-folder-schema/i-page-folder-schema";
import { join } from "node:path";
import { Ok, Result } from "ts-results";
import { PageFolder } from "../../../../models/page-packet/page-folder/page-folder";
import { TFolderSchemaHandler } from "./t-folder-schema-handler";
import { TPageFolderType } from "../../../../models/page-packet-schema/page-folder-schema/t-page-folder-type";

const handleFolderSchema: TFolderSchemaHandler = async function(
    parameters: IHandlerParameters
): Promise<Result<IPageFolder, Error>> {
    const name = parameters.itemSchema.name;
    const pathAbs = join(parameters.parentFolder.pathAbs, name);
    const pathRel = join(parameters.parentFolder.pathRel, name);

    const folder: IPageFolder = new PageFolder({
        contents: [],
        level: parameters.parentFolder.level + 1,
        name,
        pathAbs,
        pathRel,
        subType: parameters.itemSchema.subType as TPageFolderType,
        type: parameters.itemSchema.type,
    });

    let opError: Error | undefined;

    const folderSchema = parameters.itemSchema as IPageFolderSchema;

    for (const childItemSchema of folderSchema.contents) {
        const clonedParameters = Object.assign({}, parameters, {
            itemSchema: childItemSchema,
            parentFolder: folder,
        });

        const handleItemSchemaOpResult = await handleItemSchema(clonedParameters);

        if (handleItemSchemaOpResult.err) {
            opError = handleItemSchemaOpResult.val;
            break;
        }
    }

    parameters.parentFolder.contents.push(folder);
    return new Ok(parameters.parentFolder);
};

export { handleFolderSchema };
