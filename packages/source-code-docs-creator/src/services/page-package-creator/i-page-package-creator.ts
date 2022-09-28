import { IPagePacket } from "../../models/page-packet/i-page-packet";
import { Result } from "ts-results";

interface IPagePackageCreator {
    start(): Promise<Result<IPagePacket, Error>>;
};

export { IPagePackageCreator };
