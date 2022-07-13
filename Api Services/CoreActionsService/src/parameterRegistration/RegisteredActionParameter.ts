/**
 * Defines common properties of all parameters that are templated on an action.
 */
 export class RegisteredActionParameter<parameterType> {
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

    constructor(name: string, displayName: string, defaultValue: parameterType | null, optional: boolean, canEdit: boolean){
        this.name = name;
        this.displayName = displayName;
        this.defaultValue = defaultValue;
        this.optional = optional;
        this.canEdit = canEdit;
    }
}