import { ActionRegister } from "../actionRegistration/ActionRegister"
import { IActionParameter } from "./IActionParameter"

/**
 * Contains the decoration function for registering a parameter on an action.
 */
export class ActionParameter<parameterType> implements IActionParameter<parameterType>{
    name: string
    value: parameterType

    constructor(name: string, value: parameterType){
        this.name = name;
        this.value = value;
    }

  

    
    
}
