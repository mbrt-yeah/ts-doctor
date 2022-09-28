import { IStaticSiteGenerator } from "./i-static-site-generator";
import { IStaticSiteGeneratorParameters } from "./i-static-site-generator-parameters";
import { Result } from "ts-results";
import { StaticSiteGenerator } from "./static-site-generator";

async function generateSite(
    parameters: IStaticSiteGeneratorParameters
): Promise< Result<any, Error> > {
    const ssg: IStaticSiteGenerator = new StaticSiteGenerator(parameters);
    return ssg.start();
};

export { generateSite };
