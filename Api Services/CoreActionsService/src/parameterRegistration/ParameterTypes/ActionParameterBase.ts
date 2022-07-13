import { ActionRegister } from "../../actionRegistration/ActionRegister"
import { RegisteredActionParameter } from "../RegisteredActionParameter";
import { BaseParameterOptions } from "../ParameterOptions/BaseParameterOptions";

/**
 * Defines the properties for a generic action parameter
 */
export abstract class ActionParameterBase {
    
   /**
    * Generic action parameter properties.
    */
    protected name: string
    protected displayName: string
    protected defaultValue: any
    protected optional: boolean
    protected canEdit: boolean
    
    /**
     * Parameter template that can be extended by childeren of ActionParameterBase
     */
    protected parameterTemplate: RegisteredActionParameter<any>

    /**
     * Construct the default action parameter.
     * This constructor also provides the default values for base action parameter properties.
     */
    constructor(name: string, baseOptions: BaseParameterOptions){
        this.name = name;
        this.displayName = baseOptions.displayName !== undefined ? baseOptions.displayName : this.name;
        this.defaultValue = baseOptions.defaultValue !== undefined ? baseOptions.defaultValue : null;
        this.optional = baseOptions.optional !== undefined ? baseOptions.optional : false;
        this.canEdit = baseOptions.canEdit !== undefined ? baseOptions.canEdit : false;
        this.parameterTemplate = this.buildTemplate();
    }

    /**
     * Returns a parameter template containing all the base action parameter properties.
     * @returns 
     */
    protected buildTemplate = ():RegisteredActionParameter<any> => {
        return new RegisteredActionParameter<any>(
            this.name,
            this.displayName,
            this.defaultValue,
            this.optional,
            this.canEdit
        )
    }

    /**
     * Generic decorator function for registering a parameter on an action.
     * @param actionParameter
     * @returns 
     */
    protected static registerNewParameter = (parameter:ActionParameterBase) => {ActionRegister.registerActionParameter(parameter.parameterTemplate)};

}