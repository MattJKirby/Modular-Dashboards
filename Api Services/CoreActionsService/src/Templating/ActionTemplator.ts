import { ActionTemplate } from "./ActionTemplating/ActionTemplate";
import { IActionTemplate } from "./ActionTemplating/IActionTemplate";
import { EntityTemplator } from "./EntityTemplator";
import { ActionParameterTemplate } from "./ParameterTemplating/ActionParameterTemplate";

export class ActionTemplator {
    public ActionType: string;
    public DisplayName?: string;
    public Description?: string;
    public Preview?: boolean;
    public Parameters: EntityTemplator<ActionParameterTemplate<any>> = new EntityTemplator<ActionParameterTemplate<any>>();

    constructor(actionType: string){
        this.ActionType = actionType;
    }

    /**
     * Generates a new action template object, setting undefined properties as null.
     * @returns 
     */
    public generateActionTemplate = (): IActionTemplate => {
        return new ActionTemplate({
            ActionName: this.ActionType, 
            DisplayName: this.DisplayName, 
            Description: this.Description, 
            Preview: this.Preview, 
            Parameters: this.Parameters.cloneTemplateList()
        });
    }
}