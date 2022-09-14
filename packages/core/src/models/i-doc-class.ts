import { IDocClassConstructor } from "./i-doc-class-constructor";
import { IDocEntity } from "./i-doc-entity";
import { IDocMethod } from "./i-doc-method";
import { IDocProperty } from "./i-doc-property";
import { TModifier } from "./t-modifier";

interface IDocClass extends IDocEntity {
    cstrs?: IDocClassConstructor[],
    extends?: string[],
    implements?: string[],
    methods?: IDocMethod[],
    modifiers?: TModifier[],
    properties?: IDocProperty[],
};

export { IDocClass };
