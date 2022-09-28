import { IEntityDoc } from "./entity/i-entity-doc";
import { IApiDocParameters } from "./i-api-doc-parameters";

interface IApiDoc extends IApiDocParameters {
    addManyEntityDocs(entityDocs: IEntityDoc[]): void;
    addOneEntityDoc(entityDoc: IEntityDoc): void
};

export { IApiDoc };
