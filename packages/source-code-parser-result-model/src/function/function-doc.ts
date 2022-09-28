import { FunctionSignatureDoc } from "../function-signature/function-signature-doc";
import { IFunctionDoc } from "./i-function-doc";
import { IFunctionDocParameters } from "./i-function-doc-parameters";

class FunctionDoc extends FunctionSignatureDoc implements IFunctionDoc {
    public constructor(parameters: IFunctionDocParameters) {
        super(parameters);
    }
};

export { FunctionDoc };
