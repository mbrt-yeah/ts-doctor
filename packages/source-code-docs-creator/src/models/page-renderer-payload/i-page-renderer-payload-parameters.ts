import { IPage } from "../page-packet/page/i-page";
import { IPagePackageIndex } from "../page-package-index/i-page-package-index";
import { IThemeConfiguration } from "../theme/i-theme-configuration";

interface IPageRendererPayloadParameters {
    configuration: IThemeConfiguration;
    index: IPagePackageIndex;
    page: IPage<any>;
};

export { IPageRendererPayloadParameters };
