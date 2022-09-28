import { MethodSignatureDoc } from "../method-signature/method-signature-doc";
import { IMethodDocParameters } from "./i-method-doc-parameters";

class MethodDoc extends MethodSignatureDoc {
    public constructor(parameters: IMethodDocParameters) {
        super(parameters);
    }
}

export { MethodDoc };
