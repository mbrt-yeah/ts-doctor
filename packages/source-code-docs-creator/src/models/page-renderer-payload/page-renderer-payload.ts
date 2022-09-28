import { IPage } from "../page-packet/page/i-page";
import { IPagePackageIndex } from "../page-package-index/i-page-package-index";
import { IPageRendererPayload } from "./i-page-renderer-payload";
import { IPageRendererPayloadParameters } from "./i-page-renderer-payload-parameters";
import { IThemeConfiguration } from "../theme/i-theme-configuration";

class PageRendererPayload implements IPageRendererPayload {
    public configuration: IThemeConfiguration;
    public index: IPagePackageIndex;
    public page: IPage<any>;

    public constructor(parameters: IPageRendererPayloadParameters) {
        this.configuration = parameters.configuration;
        this.index = parameters.index;
        this.page = parameters.page;
    }
};

export { PageRendererPayload };