import { IFile } from "../../models/file-system/file/i-file";
import { ITheme } from "../../models/theme/i-theme";
import { IThemeTemplateLookup } from "./i-theme-template-lookup";
import { IThemeTemplateLookupParameters } from "./i-theme-template-lookup-parameters";
import { IThemeTemplateLookupResult } from "./i-theme-template-lookup-result";
import { Ok, Result } from "ts-results";
import { PageTypeLookupStrategyMap } from "./lookup-strategies/page-type-lookup-strategy-map";
import { THEME_FALLBACK_TEMPLATE_NAME } from "../../constants";
import { TPageType } from "../../models/page-packet-schema/page-schema/t-page-type";

class ThemeTemplateLookup implements IThemeTemplateLookup {
    public theme: ITheme;

    public constructor(parameters: IThemeTemplateLookupParameters) {
        this.theme = parameters.theme;
    }

    public async start(pageType: TPageType): Promise<Result<IThemeTemplateLookupResult[], Error>> {
        const result: IThemeTemplateLookupResult[] = [];

        const lookupStrategyFn = PageTypeLookupStrategyMap.get(pageType);

        if (!lookupStrategyFn || typeof lookupStrategyFn !== "function") {
            result.push({ key: pageType, });
            result.push({ key: pageType, template: this.__getFallbackTemplate() });
            return new Ok(result);
        }

        const template = lookupStrategyFn(this.theme);
        result.push( { key: pageType, template, });
        result.push( { key: pageType, template: this.__getFallbackTemplate() } );
        return new Ok(result);
    }

    private __getFallbackTemplate(): IFile | undefined {
        return this.theme.templatesMap[THEME_FALLBACK_TEMPLATE_NAME];
    }
};

export { ThemeTemplateLookup };
