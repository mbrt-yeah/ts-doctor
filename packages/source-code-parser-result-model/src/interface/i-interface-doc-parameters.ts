import { IEntityDocParameters } from "../entity/i-entity-doc-parameters";
import { IMethodSignatureDoc } from "../method-signature/i-method-signature-doc";
import { IPropertySignatureDoc } from "../property-signature/i-property-signature-doc";
import { TModifier } from "../t-modifier";

interface IInterfaceDocParameters extends IEntityDocParameters {
    extends: string[] | undefined,
    propertySignatures: IPropertySignatureDoc[] | undefined,
    methodSignatures: IMethodSignatureDoc[] | undefined,
    modifiers: TModifier[] | undefined,
};

export { IInterfaceDocParameters };
