import { ActionParameterTemplate } from "../ParameterTemplating/ActionParameterTemplate";

export interface IActionTemplate {
    /**
     * Name of the templated action.
     */
    ActionName: string,

    /**
     * Friendly name of the action. Defaults value is the action name.
     */
    DisplayName: string,

    /**
     * Description of the action.
     */
    Description: string,

    /**
     * Whether the action is in preview or not.
     */
    preview: boolean,

    /**
     * All templated parameters.
     */
    Parameters: ActionParameterTemplate<any>[]
}