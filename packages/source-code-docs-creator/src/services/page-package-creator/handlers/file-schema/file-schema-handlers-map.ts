import { handleClassIndexSchema } from "./handle-class-index-schema";
import { handleClassSchema } from "./handle-class-schema";
import { handleFunctionIndexSchema } from "./handle-function-index-schema";
import { handleFunctionSchema } from "./handle-function-schema";
import { handleIndexSchema } from "./handle-index-schema";
import { handleInterfaceIndexSchema } from "./handle-interface-index-schema";
import { handleInterfaceSchema } from "./handle-interface-schema";
import { TFileSchemaHandler } from "./t-file-schema-handler";
import { TPageType } from "../../../../models/page-packet-schema/page-schema/t-page-type";

const FileSchemaHandlersMap = new Map<TPageType, TFileSchemaHandler>([
    ["class", handleClassSchema],
    ["classIndex", handleClassIndexSchema],
    ["function", handleFunctionSchema],
    ["functionIndex", handleFunctionIndexSchema],
    ["index", handleIndexSchema],
    ["interface", handleInterfaceSchema],
    ["interfaceIndex", handleInterfaceIndexSchema],
]);

export { FileSchemaHandlersMap };
