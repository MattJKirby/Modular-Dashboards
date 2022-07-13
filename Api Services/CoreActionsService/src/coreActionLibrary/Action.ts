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

    getParameter<T> (parameterName: string, defaultValue: T): T {
        const param = new ActionParameter<T>(parameterName,defaultValue)
        this.parameters.push(param)
        return param.Value

    }

    
}