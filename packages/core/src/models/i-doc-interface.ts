import { IDocEntity } from "./i-doc-entity";
import { IDocMethod } from "./i-doc-method";
import { IDocProperty } from "./i-doc-property";
import { TModifier } from "./t-modifier";

interface IDocInterface extends IDocEntity {
    extends?: string[],
    propertySignatures?: IDocProperty[],
    methodSignatures?: IDocMethod[],
    modifiers?: TModifier[],
};

export { IDocInterface };
