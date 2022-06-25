import { IAction } from "../coreActionLibrary/IAction";
import { IRegisteredAction } from "./IRegisteredAction";

export class RegisteredAction<ActionType> implements IRegisteredAction<ActionType> {
    typeName: string;
    actionType: ActionType;
    preview: boolean;
    displayName: string;
    description: string;

    constructor(typeName: string, actionType: ActionType, preview: boolean = true, displayName: string = "Unnamed Action", desciption: string = ""){
        this.typeName = typeName;
        this.actionType = actionType;
        this.preview = preview;
        this.displayName = displayName;
        this.description = desciption;
    }


    
}