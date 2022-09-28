import { IHandlerParameters } from "../i-handler-parameters";
import { IPageFolder } from "../../../../models/page-packet/page-folder/i-page-folder";
import { Result } from "ts-results";

type TItemSchemaHandler = (parameters: IHandlerParameters) => Promise<Result<IPageFolder, Error>>;

export { TItemSchemaHandler };
