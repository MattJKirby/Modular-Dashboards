import { ActionParameterTemplate } from "../ParameterTemplating/ActionParameterTemplate";
import { IActionTemplate } from "./IActionTemplate";


export class ActionTemplate  {
    
    /** @inheritdoc */
    ActionName: string;

    /** @inheritdoc */
    DisplayName: string = '';

    /** @inheritdoc */
    Description: string = "No description available.";

    /** @inheritdoc */
    Preview: boolean = true;

    /** @inheritdoc */
    Parameters: ActionParameterTemplate<any>[] = [];

    

    /**
     * Construct with name as only required parameter.
     * @param name 
     */
    constructor(v: Partial<IActionTemplate> & { ActionName: string }) {
        Object.assign(this, v);

        this.ActionName = v.ActionName;
        this.DisplayName = this.DisplayName !== '' ? this.DisplayName : this.ActionName;
    }
}