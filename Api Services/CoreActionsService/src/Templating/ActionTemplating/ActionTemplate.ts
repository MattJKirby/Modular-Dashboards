import { ActionParameterTemplate } from "../ParameterTemplating/ActionParameterTemplate";
import { IActionTemplate } from "./IActionTemplate";


export class ActionTemplate implements IActionTemplate {
    
    /** @inheritdoc */
    ActionName: string;

    /** @inheritdoc */
    DisplayName: string;

    /** @inheritdoc */
    Description: string = "No description available.";

    /** @inheritdoc */
    preview: boolean = true;

    /** @inheritdoc */
    Parameters: ActionParameterTemplate<any>[] = [];

    /**
     * Construct with name as only required parameter.
     * @param name 
     */
    constructor(name: string){
        this.ActionName = name;
        this.DisplayName = name;
    }
}