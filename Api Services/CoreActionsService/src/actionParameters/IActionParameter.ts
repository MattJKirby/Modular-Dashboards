/**
 * Defines common properties of all parameters on an action.
 */
export type IActionParameter<parameterType> = {
    /**
     * Action name.
     */
    name: string;

    /**
     * Display friendly version of the action name.
     */
    displayName: string;

    /**
     * Action parameter value.
     */
    value: parameterType;

    /**
     * Default action parameter.
     */
    defaultValue: parameterType;

    /**
     * If a value for the parameter must be present.
     */
    optional: boolean;

    /**
     * Allows the user to edit the parameter or not.
     */
    canEdit: boolean
}