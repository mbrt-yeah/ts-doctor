import { IHandlerParameters } from "../i-handler-parameters";
import { IPageFolder } from "../../../../models/page-packet/page-folder/i-page-folder";
import { Result } from "ts-results";

type TFolderSchemaHandler = (parameters: IHandlerParameters) => Promise<Result<IPageFolder, Error>>;

export { TFolderSchemaHandler };
