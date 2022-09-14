import { IDocEntity } from "./i-doc-entity";
import { IDocParameter } from "./i-doc-parameters";
import { TModifier } from "./t-modifier";

export interface IDocFunction extends IDocEntity {
    modifiers?: TModifier[],
    parameters?: IDocParameter[],
    returnsType?: string,
};
