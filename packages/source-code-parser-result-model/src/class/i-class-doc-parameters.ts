import { IClassConstructorDoc } from "../class-constructor/i-class-constructor-doc";
import { IEntityDocParameters } from "../entity/i-entity-doc-parameters";
import { IMethodDoc } from "../method/i-method-doc";
import { IPropertyDoc } from "../property/i-property-doc";
import { TModifier } from "../t-modifier";

interface IClassDocParameters extends IEntityDocParameters {
    cstrs: IClassConstructorDoc[] | undefined,
    extends: string[] | undefined,
    implements: string[] | undefined,
    methods: IMethodDoc[] | undefined,
    modifiers: TModifier[] | undefined,
    properties: IPropertyDoc[] | undefined,
};

export { IClassDocParameters };
