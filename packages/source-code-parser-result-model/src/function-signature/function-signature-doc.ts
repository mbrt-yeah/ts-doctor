import { AEntityDoc } from "../entity/a-entity-doc";
import { IFunctionSignatureDoc } from "./i-function-signature-doc";
import { IParameterDoc } from "../parameter/i-parameter-doc";
import { TModifier } from "../t-modifier";

class FunctionSignatureDoc extends AEntityDoc implements IFunctionSignatureDoc {
    public modifiers: TModifier[] | undefined;
    public parameters: IParameterDoc[] | undefined;
    public returnsType: string | undefined;

    public constructor(parameters: IFunctionSignatureDoc) {
        super(parameters);
        this.modifiers = parameters.modifiers;
        this.parameters = parameters.parameters;
        this.returnsType = parameters.returnsType;
    }
};

export { FunctionSignatureDoc };
