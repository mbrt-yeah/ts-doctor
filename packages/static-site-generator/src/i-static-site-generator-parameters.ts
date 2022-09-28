import { IContentParameters } from "./i-content-parameters";
import { ISourceCodeParameters } from "./i-source-code-parameters";

interface IStaticSiteGeneratorParameters {
    content?: IContentParameters,
    sourceCode?: ISourceCodeParameters,
};

export { IStaticSiteGeneratorParameters };
