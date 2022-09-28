import { IApiDoc } from "./i-api-doc";
import { IApiDocParameters } from "./i-api-doc-parameters";
import { IClassDoc } from "./class/i-class-doc";
import { IEntityDoc } from "./entity/i-entity-doc";
import { IFunctionDoc } from "./function/i-function-doc";
import { IInterfaceDoc } from "./interface/i-interface-doc";
import { TEntityType } from "./t-entity-type";

class ApiDoc implements IApiDoc {
    public classes: IClassDoc[];
    public functions: IFunctionDoc[];
    public interfaces: IInterfaceDoc[];

    public constructor(parameters: IApiDocParameters = {
        classes: [],
        functions: [],
        interfaces: []
    }) {
        this.classes = parameters.classes || [];
        this.functions = parameters.functions || [];
        this.interfaces = parameters.interfaces || [];
    }

    public addManyEntityDocs(entityDocs: IEntityDoc[]): void {
        for (const entityDoc of entityDocs)
            this.addOneEntityDoc(entityDoc);

        return;
    }

    public addOneEntityDoc(entityDoc: IEntityDoc): void {
        const adders = new Map< TEntityType, (entityDoc: IEntityDoc) => void>([
            [
                "class",
                (entityDoc: IEntityDoc) => {
                    this.classes.push(entityDoc as IClassDoc);
                }
            ],
            [
                "function",
                (entityDoc: IEntityDoc) => {
                    this.functions.push(entityDoc as IFunctionDoc);
                }
            ],
            [
                "interface",
                (entityDoc: IEntityDoc) => {
                    this.interfaces.push(entityDoc as IInterfaceDoc);
                }
            ],
        ]);

        const adder = adders.get(entityDoc.entityType);

        if (!adder || typeof adder !== "function")
            return;

        return adder(entityDoc);
    }
}

export { ApiDoc };
