/**
 * Defines common properties of all parameters that are templated on an action.
 */
 export type IRegisteredActionParameter<parameterType> = {
    /**
     * Action name.
     */
    name: string;

    /**
     * Display friendly version of the action name.
     */
    displayName: string;

    /**
     * Default action parameter.
     */
    defaultValue: parameterType | null;

    /**
     * If a value for the parameter must be present.
     */
    optional: boolean;

    /**
     * Allows the user to edit the parameter or not.
     */
    canEdit: boolean
}