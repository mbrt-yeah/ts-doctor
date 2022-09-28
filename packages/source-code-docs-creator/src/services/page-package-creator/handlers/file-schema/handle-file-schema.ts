import { Err, Result } from "ts-results";
import { FileSchemaHandlersMap } from "./file-schema-handlers-map";
import { IHandlerParameters } from "../i-handler-parameters";
import { IPageFolder } from "../../../../models/page-packet/page-folder/i-page-folder";
import { TFileSchemaHandler } from "./t-file-schema-handler";
import { TPageType } from "../../../../models/page-packet-schema/page-schema/t-page-type";

const handleFileSchema: TFileSchemaHandler = async function(
    parameters: IHandlerParameters,
): Promise<Result<IPageFolder, Error>> {
    const fileSchemaHandler = FileSchemaHandlersMap.get(parameters.itemSchema.subType as TPageType);

    if (fileSchemaHandler === undefined) {
        const error = new Error(`No handler for file schema of type >${parameters.itemSchema.subType}< has been found.`);
        return new Err(error);
    }

    const fileSchemaHandlerType = typeof fileSchemaHandler;

    if (fileSchemaHandlerType !== "function") {
        const error = new Error(`The type of file schema handler is >${fileSchemaHandlerType}< while it is expected to be >function<.`);
        return new Err(error);
    }

    return fileSchemaHandler(parameters);
};

export { handleFileSchema };

