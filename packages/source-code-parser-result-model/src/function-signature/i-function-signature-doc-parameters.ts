import { IEntityDocParameters } from "../entity/i-entity-doc-parameters";
import { IParameterDoc } from "../parameter/i-parameter-doc";
import { TModifier } from "../t-modifier";

interface IFunctionSignatureDocParameters extends IEntityDocParameters {
    modifiers: TModifier[] | undefined,
    parameters: IParameterDoc[] | undefined,
    returnsType: string | undefined,
};

export { IFunctionSignatureDocParameters };
