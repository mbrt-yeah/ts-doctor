import { IDocEntity } from "./i-doc-entity";
import { IDocParameter } from "./i-doc-parameters";
import { TModifier } from "./t-modifier";

export interface IDocFunctionSignature extends IDocEntity {
    modifiers?: TModifier[],
    parameters?: IDocParameter[],
    returnsType?: string,
};