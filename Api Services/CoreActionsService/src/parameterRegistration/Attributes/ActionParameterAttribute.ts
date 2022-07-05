import { ActionRegister } from "../../actionRegistration/ActionRegister"


/**
 * Defines the properties for a generic action parameter
 */
export abstract class ActionParameterAttribute<parameterType> {

    /**
     * Name of the action.
     */
    name: string

    /**
     * Friendly display name of the action.
     */
    displayName: string

    /**
     * Default value of the action. If not supplied, this value is null.
     */
    defaultValue: parameterType | null

    /**
     * Determines wheather a non null value is allowed as an action value.
     */
    optional: boolean

    /**
     *  Determines wheather the user can edit the value of the action.
     */
    canEdit: boolean

    constructor(name: string, displayName: string = name, defaultValue: (parameterType | null) = null , optional: boolean = false, canEdit: boolean = false){
        this.name = name;
        this.displayName = displayName;
        this.defaultValue = defaultValue;
        this.optional = optional;
        this.canEdit = canEdit;
    }

    /**
     * Generic decorator function for registering a parameter on an action.
     * @param actionParameter
     * @returns 
     */
    public static register = (actionParameterAttribute: ActionParameterAttribute<any>) => {
        ActionRegister.registerActionParameter(actionParameterAttribute);
    }

}