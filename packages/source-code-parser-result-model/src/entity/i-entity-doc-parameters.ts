import { TEntityType } from "../t-entity-type";

interface IEntityDocParameters {
    entityType: TEntityType,
    name: string,
    sourceFilePath: string,
    sourceFull: string,
};

export { IEntityDocParameters };
