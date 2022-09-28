import { IEntityDoc } from "../entity/i-entity-doc";
import { TModifier } from "../t-modifier";

interface IPropertySignatureDocParameters extends IEntityDoc {
    modifiers: TModifier[] | undefined;
    type: string | undefined;
};

export { IPropertySignatureDocParameters };
