import { TEntityType } from "@ts-doctor/source-code-parser-result-model";

type TPageType = 
      TEntityType 
    | "classIndex"
    | "functionIndex"
    | "index"
    | "interfaceIndex";

export { TPageType };
