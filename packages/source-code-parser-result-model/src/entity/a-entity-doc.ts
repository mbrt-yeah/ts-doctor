import { TEntityType } from "../t-entity-type";
import { IEntityDoc } from "./i-entity-doc";
import { IEntityDocParameters } from "./i-entity-doc-parameters";

abstract class AEntityDoc implements IEntityDoc {
    public entityType: TEntityType;
    public name: string;
    public sourceFilePath: string;
    public sourceFull: string;

    public constructor(parameters: IEntityDocParameters) {
        this.entityType = parameters.entityType;
        this.name = parameters.name;
        this.sourceFilePath = parameters.sourceFilePath;
        this.sourceFull = parameters.sourceFull;
    }
};

export { AEntityDoc };
