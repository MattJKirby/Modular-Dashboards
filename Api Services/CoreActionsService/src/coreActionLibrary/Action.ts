import { ActionParameter } from "../actionParameters/ActionParameter";
import { IActionParameter } from "../actionParameters/IActionParameter";
import { IAction } from "./IAction";

export abstract class Action implements IAction{
    
    // public name: string
    public parameters: IActionParameter[] = [];

    constructor()

    constructor(cloneFrom?: IAction)
    constructor(cloneFrom?: IAction){
        this.parameters = cloneFrom?.parameters !== undefined ? cloneFrom.parameters : []
    }

    abstract execute: () => void;

    abstract clone: () => IAction;

    protected getParameter<T> (parameterName: string, defaultValue: T): ActionParameter<T> {
        const existingParameter = this.parameters.find(p => p.Name === parameterName);

        if(existingParameter === undefined)
            this.parameters.push(new ActionParameter<T>(parameterName,defaultValue));
        
        return existingParameter || this.parameters[this.parameters.length -1]

    }

   

  

    
}