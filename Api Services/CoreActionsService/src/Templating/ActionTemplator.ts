import { ActionTemplate } from "./ActionTemplating/ActionTemplate";
import { IActionTemplate } from "./ActionTemplating/IActionTemplate";
import { EntityTemplator } from "./EntityTemplator";
import { ActionParameterTemplate } from "./ParameterTemplating/ActionParameterTemplate";

export class ActionTemplator {
    public ActionType: string;
  
    public Parameters: EntityTemplator<ActionParameterTemplate<any>> = new EntityTemplator<ActionParameterTemplate<any>>();

    constructor(actionType: string){
        this.ActionType = actionType;
    }

    public generateActionTemplate = (): IActionTemplate => {
        return new ActionTemplate({ActionName: this.ActionType, Parameters: this.Parameters.cloneTemplateList()})
    }
}