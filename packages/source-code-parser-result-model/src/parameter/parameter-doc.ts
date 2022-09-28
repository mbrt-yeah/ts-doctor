import { AEntityDoc } from "../entity/a-entity-doc";
import { IParameterDoc } from "./i-parameter-doc";
import { IParameterDocParameters } from "./i-parameters-doc-parameters";

class ParameterDoc extends AEntityDoc implements IParameterDoc {
    public type: string | undefined;

    public constructor(parameters: IParameterDocParameters) {
        super(parameters);
        this.type = parameters.type;
    }
};

export { ParameterDoc };
