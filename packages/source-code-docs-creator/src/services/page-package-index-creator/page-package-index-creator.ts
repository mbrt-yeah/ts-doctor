import { IPagePackageIndex } from "../../models/page-package-index/i-page-package-index";
import { IPagePackageIndexCreator } from "./i-page-package-index-creator";
import { IPagePackageIndexCreatorParameters } from "./i-page-package-index-creator-parameters";
import { IPagePacket } from "../../models/page-packet/i-page-packet";
import { Result } from "ts-results";

class PagePackageIndexCreator implements IPagePackageIndexCreator {
    public pagePackage: IPagePacket;

    public constructor(parameters: IPagePackageIndexCreatorParameters) {
        this.pagePackage = parameters.pagePackage;
    }

    public async start(): Promise<Result<IPagePackageIndex, Error>> {
        throw new Error("Method not implemented.");
    }
};

export { PagePackageIndexCreator };
