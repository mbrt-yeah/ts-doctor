import { IItem } from "./i-item";
import { IItemParameters } from "./i-item-parameters";
import { TItemType } from "./t-item-type";
import { nanoid } from "nanoid";

abstract class AItem implements IItem {
    public id: string;
    public name: string;
    public pathAbs: string;
    public pathRel: string;
    public type: TItemType;
    
    public constructor(parameters: IItemParameters) {
        this.id = nanoid();
        this.name = parameters.name;
        this.pathAbs = parameters.pathAbs;
        this.pathRel = parameters.pathRel;
        this.type = parameters.type;
    }
};

export { AItem };
