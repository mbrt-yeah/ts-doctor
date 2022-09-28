import { IFunctionDoc } from "@ts-doctor/source-code-parser-result-model";
import { IHandlerParameters } from "../i-handler-parameters";
import { IPage } from "../../../../models/page-packet/page/i-page";
import { IPageFolder } from "../../../../models/page-packet/page-folder/i-page-folder";
import { IPageSchema } from "../../../../models/page-packet-schema/page-schema/i-page-schema";
import { join } from "node:path";
import { Ok, Result } from "ts-results";
import { Page } from "../../../../models/page-packet/page/page";
import { TFileSchemaHandler } from "./t-file-schema-handler";
import { TPageType } from "../../../../models/page-packet-schema/page-schema/t-page-type";

const handleFunctionIndexSchema: TFileSchemaHandler = async function(
    parameters: IHandlerParameters
): Promise<Result<IPageFolder, Error>> {
    if (parameters.itemSchema.cardinality === 0)
        return new Ok(parameters.parentFolder);

    const pageSchema: IPageSchema = parameters.itemSchema as IPageSchema;

    const name = pageSchema.name + "." + parameters.configuration.output.format;
    const pathAbs = join(parameters.parentFolder.pathAbs, name);
    const pathRel = join(parameters.parentFolder.pathRel, name);

    const page: IPage<IFunctionDoc[]> = new Page<IFunctionDoc[]>({
        content: parameters.apiDoc.functions,
        contentSelector: "apiDoc.functions",
        level: parameters.parentFolder.level,
        name,
        pathAbs,
        pathRel,
        subType: pageSchema.subType as TPageType,
        title: pageSchema.title,
        type: pageSchema.type,
    });

    const finalCardinality = (parameters.itemSchema.cardinality === "infinity") ? 100 : parameters.itemSchema.cardinality;

    for (let i = 0; i < finalCardinality; i++)
        parameters.parentFolder.contents.push(page);

    return new Ok(parameters.parentFolder);
};

export { handleFunctionIndexSchema };
