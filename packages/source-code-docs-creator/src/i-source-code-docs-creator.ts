import { IPagePacket } from "./models/page-packet/i-page-packet";
import { Result } from "ts-results";

interface ISourceCodeDocsCreator {
    start(): Promise<Result<IPagePacket, Error>>;
};

export { ISourceCodeDocsCreator };
