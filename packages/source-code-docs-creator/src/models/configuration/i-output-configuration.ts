import { TFormat } from "./t-format";

interface IOutputConfiguration {
    beautify?: boolean;
    beautifyConfiguration?: any;
    format: TFormat;
    minify?: boolean;
    minifyConfiguration?: any;
    path: string;
};

export { IOutputConfiguration };
