import { IPagePackageIndex } from "../../models/page-package-index/i-page-package-index";
import { IPagePackageIndexCreatorParameters } from "./i-page-package-index-creator-parameters";
import { Result } from "ts-results";

interface IPagePackageIndexCreator extends IPagePackageIndexCreatorParameters {
    start(): Promise<Result<IPagePackageIndex, Error>>;
};

export { IPagePackageIndexCreator };
