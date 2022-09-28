import { FunctionSignatureDoc } from "../function-signature/function-signature-doc";
import { IMethodSignatureDoc } from "./i-method-signature-doc";
import { IMethodSignatureDocParameters } from "./i-method-signature-doc-parameters";

class MethodSignatureDoc extends FunctionSignatureDoc implements IMethodSignatureDoc {
    public constructor(parameters: IMethodSignatureDocParameters) {
        super(parameters);
    }
};

export { MethodSignatureDoc };
