import { IStaticSiteGenerator } from "./i-static-site-generator";
import { IStaticSiteGeneratorParameters } from "./i-static-site-generator-parameters";
import { parseSourceCode } from "@ts-doctor/source-code-parser";
import { Result } from "ts-results";

class StaticSiteGenerator implements IStaticSiteGenerator {
    private __parameters: IStaticSiteGeneratorParameters;

    public constructor(parameters: IStaticSiteGeneratorParameters) {
        this.__parameters = parameters;
    }

    public async start(): Promise< Result<void, Error> > {
        throw new Error("Method not implemented.");
    }
};

export { StaticSiteGenerator };
