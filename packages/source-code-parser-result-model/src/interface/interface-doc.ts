import { AEntityDoc } from "../entity/a-entity-doc";
import { IMethodSignatureDoc } from "../method-signature";
import { IPropertySignatureDoc } from "../property-signature";
import { TModifier } from "../t-modifier";
import { IInterfaceDoc } from "./i-interface-doc";
import { IInterfaceDocParameters } from "./i-interface-doc-parameters";

class InterfaceDoc extends AEntityDoc implements IInterfaceDoc {
    public extends: string[] | undefined;
    public propertySignatures: IPropertySignatureDoc[] | undefined;
    public methodSignatures: IMethodSignatureDoc[] | undefined;
    public modifiers: TModifier[] | undefined;

    public constructor(parameters: IInterfaceDocParameters) {
        super(parameters);
        this.extends = parameters.extends;
        this.propertySignatures = parameters.propertySignatures;
        this.methodSignatures = parameters.methodSignatures;
        this.modifiers = parameters.modifiers;
    }
};

export { InterfaceDoc };
