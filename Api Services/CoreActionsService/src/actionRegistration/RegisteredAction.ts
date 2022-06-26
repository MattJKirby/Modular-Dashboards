import { IAction } from "../coreActionLibrary/IAction";
import { IRegisteredAction } from "./IRegisteredAction";

export class RegisteredAction<ActionType> implements IRegisteredAction<ActionType> {
    typeName: string;
    actionType: ActionType;
    endpoint: string;
    preview: boolean;
    displayName: string;
    description: string;

    constructor(typeName: string, actionType: ActionType, endpoint: string, preview: boolean = true, displayName: string = "Unnamed Action", desciption: string = ""){
        this.typeName = typeName;
        this.actionType = actionType;
        this.endpoint = endpoint;
        this.preview = preview;
        this.displayName = displayName;
        this.description = desciption;
    }


    
}