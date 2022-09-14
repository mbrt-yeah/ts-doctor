import { IDocEntity } from "./i-doc-entity";
import { TModifier } from "./t-modifier";

export interface IDocPropertySignature extends IDocEntity {
    modifiers?: TModifier[];
    type?: string;
};
