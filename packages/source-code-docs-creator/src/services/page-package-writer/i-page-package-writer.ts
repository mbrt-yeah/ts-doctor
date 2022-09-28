import { IPagePackageWriterParameters } from "./i-page-package-writer-parameters";
import { IPagePacket } from "../../models/page-packet/i-page-packet";
import { Result } from "ts-results";

interface IPagePackageWriter extends IPagePackageWriterParameters {
    start(): Promise<Result<IPagePacket, Error>>;
};

export { IPagePackageWriter };
