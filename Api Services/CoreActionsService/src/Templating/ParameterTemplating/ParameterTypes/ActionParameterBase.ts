import { Templator } from "../../Templator";
import { ActionParameterTemplate } from "../ActionParameterTemplate";

/**
 * Defines the properties for a generic action parameter
 */
export abstract class ActionParameterBase<T extends ActionParameterBase<T>> {
    
   /**
    * Generic action parameter properties.
    */
    protected name: string;
    protected displayName: string = '';
    protected uid: string = ``;
    protected defaultValue: any = null;
    protected optional: boolean = false;
    protected canEdit: boolean = false;
    

    /**
     * Construct the default action parameter.
     * This constructor also provides the default values for base action parameter properties.
     */
    constructor(v: Partial<T> & { name: string }) {
        Object.assign(this, v);
        
        // Override the partial defenitions of these properties. (Custom default values)
        this.name = v.name
        this.displayName = this.displayName !== '' ? this.displayName : this.name
        this.uid = `ActionParameter__${this.name}__GUID`
    }

    /**
     * Returns a parameter template containing all the base action parameter properties.
     * @returns 
     */
    protected buildTemplate():ActionParameterTemplate<typeof this.defaultValue>{
        return new ActionParameterTemplate({
            Name: this.name,
            DisplayName: this.displayName,
            Uid: this.uid,
            DefaultValue: this.defaultValue,
            Optional: this.optional,
            CanEdit: this.canEdit
        })
    }

    /**
     * Generic decorator function for registering a parameter on an action.
     * @param actionParameter
     * @returns 
     */
    protected static registerNewParameter = <T extends ActionParameterBase<T>>(actionTypeName: string, parameter:ActionParameterBase<T>) => {
        Templator.templateEntity(actionTypeName, parameter.buildTemplate());
    };

}