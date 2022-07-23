import { ActionTemplate } from "../Templating/ActionTemplating/ActionTemplate";
import { IActionTemplate } from "../Templating/ActionTemplating/IActionTemplate";



export class RegisteredAction<Type> {
    
    /** @inheritDoc */
    TypeName: string;

    /** @inheritDoc */
    ActionType: Type;

    /** @inheritDoc */
    Endpoint: string;

    /** @inheritDoc */
    Template: IActionTemplate;

    constructor(typeName: string, actionType: Type, endpoint: string, template: IActionTemplate){
        this.TypeName = typeName;
        this.ActionType = actionType;
        this.Endpoint = endpoint;   
        this.Template = template;
    }
}