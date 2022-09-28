import { AEntityDoc } from "../entity/a-entity-doc";
import { IClassConstructorDoc } from "../class-constructor/i-class-constructor-doc";
import { IClassDoc } from "./i-class-doc";
import { IClassDocParameters } from "./i-class-doc-parameters";
import { IMethodDoc } from "../method/i-method-doc";
import { IPropertyDoc } from "../property/i-property-doc";
import { TModifier } from "../t-modifier";

class ClassDoc extends AEntityDoc implements IClassDoc {
    public cstrs: IClassConstructorDoc[] | undefined;
    public extends: string[] | undefined;
    public implements: string[] | undefined;
    public methods: IMethodDoc[] | undefined;
    public modifiers: TModifier[] | undefined;
    public properties: IPropertyDoc[] | undefined;

    public constructor(parameters: IClassDocParameters) {
        super(parameters);
        this.cstrs = parameters.cstrs;
        this.extends = parameters.extends;
        this.implements = parameters.implements;
        this.methods = parameters.methods;
        this.modifiers = parameters.modifiers;
        this.properties = parameters.properties;
    }
};

export { ClassDoc };
