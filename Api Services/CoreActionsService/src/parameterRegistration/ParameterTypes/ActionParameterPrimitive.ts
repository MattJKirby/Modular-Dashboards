import { IRegisteredActionParameter } from "../IRegisteredActionParameter";
import { BaseParameterOptions } from "../ParameterOptions/BaseParameterOptions";
import { ActionParameterBase } from "./ActionParameterBase";

export class ActionParameterPrimitive<primitiveType> extends ActionParameterBase<primitiveType> {

    private parameterType: string 

    constructor(name: string, parameterType: string, parameterOptions: BaseParameterOptions<primitiveType>){
        super(name, parameterOptions.displayName, parameterOptions.defaultValue, parameterOptions.optional, parameterOptions.canEdit);
        this.parameterType = parameterType
    
        this.parameterTemplate = this.buildTemplate();
    }

    private assertDefaultValue = <primitiveType>(initialValue: primitiveType) => {
        const defaultValue = this.parameterType == 'boolean'? false : initialValue
        return defaultValue;     
    }

    /**
     * Extends the parameter template by overriding the buildTemplate method
     * @returns 
     */
    protected buildTemplate = (): IRegisteredActionParameter<primitiveType> => {
        const template = {
            parameterType: this.parameterType,
            defaultValue: this.assertDefaultValue(this.parameterTemplate.defaultValue)
        }
       return Object.assign(this.parameterTemplate, template);
    };

    /**
     * Register the parameter by instantiating the parameter type with the parameter name and corresponding action parameter options.
     * @returns 
     */
    public static register = <primitiveType>(parameterOptions: BaseParameterOptions<primitiveType>) => (target: any, propertyKey: string) => {
        const parameter = Object.entries(new target.constructor).find(o => o[0] === propertyKey)
        super.registerNewParameter(new ActionParameterPrimitive<primitiveType>(propertyKey, typeof parameter![1], parameterOptions));
    }
}





