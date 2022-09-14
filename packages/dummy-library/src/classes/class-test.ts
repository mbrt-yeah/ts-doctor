import { IInterfaceTest } from "../interfaces/interface-test";

abstract class ClassAbstract {
    /*private __property: string;
    private __property2: void;
    private __property3: IInterfaceTest;

    public constructor(parameter: string) {
        this.__property = parameter;
    };

    public async method1(): Promise<string> {
        return "hello";
    }

    public abstract method2(): string;*/
};

class ClassTest extends ClassAbstract {

};

export { ClassAbstract, ClassTest };
