import { IFile } from "../../../models/file-system/file/i-file";
import { ITheme } from "../../../models/theme/i-theme";
import { TPageType } from "../../../models/page-packet-schema/page-schema/t-page-type";

const PageTypeLookupStrategyMap = new Map<TPageType, (theme: ITheme) => IFile | undefined>([
    ["class", (theme: ITheme) => theme.templatesMap["class"]],
    ["classIndex", (theme: ITheme) => theme.templatesMap["class-index"]],
    ["function", (theme: ITheme) => theme.templatesMap["function"]],
    ["functionIndex", (theme: ITheme) => theme.templatesMap["function-index"]],
    ["index", (theme: ITheme) => theme.templatesMap["index"]],
    ["interface", (theme: ITheme) => theme.templatesMap["interface"]],
    ["interfaceIndex", (theme: ITheme) => theme.templatesMap["interface-index"]],
]);

export { PageTypeLookupStrategyMap };
