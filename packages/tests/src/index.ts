import { ISourceCodeDocsCreatorConfiguration } from "@ts-doctor/source-code-docs-creator";
import { ISourceCodeParserParameters } from "@ts-doctor/source-code-parser";
import { testSourceCodeDocsCreator } from "./test-source-code-docs-creator";
import { testSourceCodeParser } from "./test-source-code-parser";

async function init(): Promise<void> {

    const parser: ISourceCodeParserParameters = {
        sourceFilePaths: ["C:\\Users\\MEinbrodt\\Personal\\DEV\\project-ts-doctor\\packages\\dummy-library\\**\\*.ts"],
    };

    const creator: ISourceCodeDocsCreatorConfiguration = {
        output: {
            beautify: true,
            format: "html",
            path: "C:\\Users\\MEinbrodt\\Personal\\DEV\\project-ts-doctor\\api-docs",
        },
        theme: {
            path: "C:\\Users\\MEinbrodt\\Personal\\DEV\\project-ts-doctor\\packages\\source-code-docs-default-theme",
        },
    };

    const testOpResult1 = await testSourceCodeParser(parser);

    if (testOpResult1.err) {
        console.log("### ERROR Source Code Parser ###\n");
        console.error(testOpResult1.val);
    } else {
        // console.log("### SUCCESS Source Code Parser ###\n");
        // console.log(testOpResult1.val);
    }

    console.log("\n\n\n");

    const testOpResult2 = await testSourceCodeDocsCreator({ parser, creator });

    if (testOpResult2.err) {
        console.log("### ERROR Source Code Docs Creator ###\n");
        console.error(testOpResult2.val);
    } else {
        console.log("### SUCCESS Source Code Docs Creator ###\n");
        console.log( JSON.stringify(testOpResult2.val) );
    }
}

init();
