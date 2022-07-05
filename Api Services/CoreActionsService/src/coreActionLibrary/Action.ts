import { IActionParameter } from "../actionParameters/IActionParameter";
import { IAction } from "../coreActionLibrary/IAction"

export abstract class Action {
    
    parameters: IActionParameter<any>[] = [];

    abstract execute: () => void;

    getParameter<T> (parameterName: string): T {
        console.log("asdf")
        // this.parameters.push({name: parameterName, displayName: parameterName, value: "asdf", defaultValue: "Asdf", optional: false, canEdit: true})
        return this.parameters.find(p => p.name === parameterName)?.value
    }
}