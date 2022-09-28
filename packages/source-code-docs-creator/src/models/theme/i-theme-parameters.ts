import { IThemeConfiguration } from "./i-theme-configuration";
import { TTemplatesMap } from "./t-templates-map";

interface IThemeParameters {
    basePath: string,
    configuration: IThemeConfiguration;
    templatesMap: TTemplatesMap;
};

export { IThemeParameters };
