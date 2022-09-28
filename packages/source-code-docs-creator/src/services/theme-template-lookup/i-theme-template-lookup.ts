import { IThemeTemplateLookupParameters } from "./i-theme-template-lookup-parameters";
import { IThemeTemplateLookupResult } from "./i-theme-template-lookup-result";
import { Result } from "ts-results";
import { TPageType } from "../../models/page-packet-schema/page-schema/t-page-type";

interface IThemeTemplateLookup extends IThemeTemplateLookupParameters {
    start(pageType?: TPageType): Promise<Result<IThemeTemplateLookupResult[], Error>>;
};

export { IThemeTemplateLookup };
