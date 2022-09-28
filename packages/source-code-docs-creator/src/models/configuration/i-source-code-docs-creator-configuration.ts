import { IOutputConfiguration } from "./i-output-configuration";
import { IThemeConfiguration } from "../theme/i-theme-configuration";

interface ISourceCodeDocsCreatorConfiguration {
    output: IOutputConfiguration,
    theme: IThemeConfiguration,
};

export { ISourceCodeDocsCreatorConfiguration };
