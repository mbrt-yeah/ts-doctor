import { IDocRoot, IParserMainParameters, parse } from "@ts-doctor/core";

const init = async function(parameters: IParserMainParameters): Promise<void> {
    const parseResult = await parse(parameters);

    if (parseResult.err)
        throw parseResult.val;

    const docJSON: IDocRoot = parseResult.val;

    if (!docJSON.entities || docJSON.entities.length === 0) {
        console.log("No entities");
        return undefined;
    }

    const docsJSONStringifyied = JSON.stringify(docJSON);

    console.log(docsJSONStringifyied);

    return;
}

init({
    sourceFilePaths: ["C:\\Users\\MEinbrodt\\Personal\\DEV\\project-ts-doctor\\packages\\dummy-library\\**\\*.ts"],
});
