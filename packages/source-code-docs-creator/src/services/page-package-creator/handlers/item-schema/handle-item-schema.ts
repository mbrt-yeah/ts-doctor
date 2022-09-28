import { handleFileSchema } from "../file-schema/handle-file-schema";
import { handleFolderSchema } from "../folder-schema/handle-folder-schema";
import { IHandlerParameters } from "../i-handler-parameters";
import { IPageFolder } from "../../../../models/page-packet/page-folder/i-page-folder";
import { Result } from "ts-results";
import { TItemSchemaHandler } from "./t-item-schema-handler";

const handleItemSchema: TItemSchemaHandler = async function(
    parameters: IHandlerParameters
): Promise<Result<IPageFolder, Error>> {
    if (parameters.itemSchema.type === "file")
        return handleFileSchema(parameters);

    return handleFolderSchema(parameters);
};

export { handleItemSchema };
