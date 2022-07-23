import { ActionParameterTemplate } from "../ParameterTemplating/ActionParameterTemplate";
import { IActionTemplate } from "./IActionTemplate";


export class ActionTemplate implements IActionTemplate{
    
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
     * Remove all undefined properties from object partial.
     * @param name 
     */
    constructor(v: Partial<IActionTemplate> & { ActionName: string }) {
        Object.assign(this, Object.fromEntries(Object.entries(v).filter(([_, v]) => v != undefined)));

        this.ActionName = v.ActionName;
        this.DisplayName = this.DisplayName !== '' ? this.DisplayName : this.ActionName;
    }
}