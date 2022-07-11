import { ActionRegister } from "../../actionRegistration/ActionRegister"
import { IRegisteredActionParameter } from "../IRegisteredActionParameter";

/**
 * Defines the properties for a generic action parameter
 */
export abstract class ActionParameterBase<parameterType> {
    
   /**
    * Generic action parameter properties.
    */
    private name: string
    private displayName: string
    private defaultValue: parameterType | null
    private optional: boolean
    private canEdit: boolean
    
    /**
     * Parameter template that can be extended by childeren of ActionParameterBase
     */
    protected parameterTemplate: IRegisteredActionParameter<parameterType>

    /**
     * Construct the default action parameter.
     * This constructor also provides the default values for base action parameter properties.
     */
    constructor(name: string, displayName: string = name, defaultValue: (parameterType | null) = null , optional: boolean = false, canEdit: boolean = false){
        this.name = name;
        this.displayName = displayName;
        this.defaultValue = defaultValue;
        this.optional = optional;
        this.canEdit = canEdit;
        this.parameterTemplate = this.buildTemplate();
    }

    /**
     * Returns a parameter template containing all the base action parameter properties.
     * @returns 
     */
    protected buildTemplate = ():IRegisteredActionParameter<parameterType> => {
        const test: IRegisteredActionParameter<parameterType> =  {
            name: this.name,
            displayName: this.displayName,
            defaultValue: this.defaultValue,
            optional: this.optional,
            canEdit: this.canEdit
        }
        return test
    }

    /**
     * Generic decorator function for registering a parameter on an action.
     * @param actionParameter
     * @returns 
     */
    protected static registerNewParameter = (parameter:ActionParameterBase<any>) => {ActionRegister.registerActionParameter(parameter.parameterTemplate)};

}