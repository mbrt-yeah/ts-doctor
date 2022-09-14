import { IDocSourceFile } from "./i-doc-source-file";
import { TEntityType } from "./t-entity-type";

interface IDocEntity {
    entityType?: TEntityType,
    name?: string,
    sourceFile?: IDocSourceFile,
    sourceFull?: string,
};

export { IDocEntity };
