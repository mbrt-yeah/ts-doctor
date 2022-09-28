import { Err, Ok, Result } from "ts-results";
import { FileAndFolderNamer } from "../../../file-and-folder-namer/file-and-folder-namer";
import { IClassDoc } from "@ts-doctor/source-code-parser-result-model";
import { IHandlerParameters } from "../i-handler-parameters";
import { IPage } from "../../../../models/page-packet/page/i-page";
import { IPageFolder } from "../../../../models/page-packet/page-folder/i-page-folder";
import { IPageSchema } from "../../../../models/page-packet-schema/page-schema/i-page-schema";
import { join } from "node:path";
import { Page } from "../../../../models/page-packet/page/page";
import { TFileSchemaHandler } from "./t-file-schema-handler";
import { TPageType } from "../../../../models/page-packet-schema/page-schema/t-page-type";

const handleClassSchema: TFileSchemaHandler = async function(
    parameters: IHandlerParameters,
): Promise<Result<IPageFolder, Error>> {
    if (parameters.itemSchema.cardinality === 0)
        return new Ok(parameters.parentFolder);

    const pageSchema: IPageSchema = parameters.itemSchema as IPageSchema;

    const finalCardinality = (parameters.itemSchema.cardinality === "infinity") ? parameters.apiDoc.classes.length : parameters.itemSchema.cardinality;

    let opError: Error | undefined;

    for (let i = 0; i < finalCardinality; i++) {
        const fileNamer = new FileAndFolderNamer({
            entityDoc: parameters.apiDoc.classes[i],
            fileOrFolderNameRaw: pageSchema.name,
            number: i,
        });

        const fileNamerOpResult = await fileNamer.start();

        if (fileNamerOpResult.err) {
            opError = fileNamerOpResult.val;
            break;
        }

        const name = fileNamerOpResult.val + "." + parameters.configuration.output.format;
        const pathAbs = join(parameters.parentFolder.pathAbs, name);
        const pathRel = join(parameters.parentFolder.pathRel, name);

        const page: IPage<IClassDoc> = new Page<IClassDoc>({
            content: parameters.apiDoc.classes[i],
            contentSelector: `apiDoc.classes[${i}]`,
            level: parameters.parentFolder.level,
            name,
            pathAbs,
            pathRel,
            subType: pageSchema.subType as TPageType,
            title: pageSchema.title,
            type: pageSchema.type,
        });

        parameters.parentFolder.contents.push(page);
    }

    if (opError)
        return new Err(opError);

    return new Ok(parameters.parentFolder);
};

export { handleClassSchema };
