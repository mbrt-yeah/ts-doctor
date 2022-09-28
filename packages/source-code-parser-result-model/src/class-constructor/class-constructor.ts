import { IClassConstructorDoc } from "./i-class-constructor-doc";
import { IClassConstructorDocParameters } from "./i-class-constructor-doc-parameters";
import { MethodDoc } from "../method/method-doc";

class ClassConstructorDoc extends MethodDoc implements IClassConstructorDoc {
    public constructor(parameters: IClassConstructorDocParameters) {
        super(parameters);
    }
}

export { ClassConstructorDoc };
