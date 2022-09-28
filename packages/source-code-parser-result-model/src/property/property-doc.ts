import { IPropertyDoc } from "./i-property-doc";
import { IPropertyDocParameters } from "./i-property-doc-parameters";
import { PropertySignatureDoc } from "../property-signature/property-signature-doc";

class PropertyDoc extends PropertySignatureDoc implements IPropertyDoc {
    public constructor(parameters: IPropertyDocParameters) {
        super(parameters);
    }
};

export { PropertyDoc };
