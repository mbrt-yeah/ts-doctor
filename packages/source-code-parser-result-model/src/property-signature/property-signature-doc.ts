import { AEntityDoc } from "../entity/a-entity-doc";
import { TModifier } from "../t-modifier";
import { IPropertySignatureDoc } from "./i-property-signature-doc";
import { IPropertySignatureDocParameters } from "./i-property-signature-doc-parameters";

class PropertySignatureDoc extends AEntityDoc implements IPropertySignatureDoc {
    public modifiers: TModifier[] | undefined;
    public type: string | undefined;

    public constructor(parameters: IPropertySignatureDocParameters) {
        super(parameters);
        this.modifiers = parameters.modifiers;
        this.type = parameters.type;
    }
};

export { PropertySignatureDoc };