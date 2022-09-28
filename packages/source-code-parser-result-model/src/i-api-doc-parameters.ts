import { IClassDoc } from "./class/i-class-doc";
import { IFunctionDoc } from "./function/i-function-doc";
import { IInterfaceDoc } from "./interface/i-interface-doc";

interface IApiDocParameters {
    classes: IClassDoc[];
    functions: IFunctionDoc[];
    interfaces: IInterfaceDoc[];
};

export { IApiDocParameters };
