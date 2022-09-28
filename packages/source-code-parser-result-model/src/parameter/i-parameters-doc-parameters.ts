import { IEntityDocParameters } from "../entity/i-entity-doc-parameters";

interface IParameterDocParameters extends IEntityDocParameters {
    type: string | undefined;
};

export { IParameterDocParameters };
