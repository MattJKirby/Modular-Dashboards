import { IActionParameter } from "./IActionParameter"

/**
 * Contains the decoration function for registering a parameter on an action.
 */
export class ActionParameter<T> implements IActionParameter{
    Name: string
    Value: T
    HasValue: boolean

    constructor(name: string, value: T){
        this.Name = name;
        this.Value = value;
        this.HasValue = this.Value != null;
    } 
}
