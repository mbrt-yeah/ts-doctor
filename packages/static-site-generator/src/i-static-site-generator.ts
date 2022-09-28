import { Result } from "ts-results";

interface IStaticSiteGenerator {
    start(): Promise< Result<any, Error> >;
};

export { IStaticSiteGenerator };
