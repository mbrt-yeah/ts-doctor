import { IPagePacket } from "../../models/page-packet/i-page-packet";
import { Result } from "ts-results";

interface IPagePackageRenderer {
    start(): Promise<Result<IPagePacket, Error>>;
};

export { IPagePackageRenderer };
