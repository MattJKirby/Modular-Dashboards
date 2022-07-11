import { ActionParameter } from "../actionParameters/ActionParameter";
import { IActionParameter } from "../actionParameters/IActionParameter";

export abstract class Action {
    
    private parameters: IActionParameter<any>[] = [];

    abstract execute: () => void;

    getParameter<T> (parameterName: string, defaultValue: T): T {
        
    
        const param = new ActionParameter<T>(parameterName,defaultValue)
      

       
        return param.value

    }
}