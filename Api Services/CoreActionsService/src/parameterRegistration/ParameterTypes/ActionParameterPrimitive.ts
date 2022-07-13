import { RegisteredActionParameter } from "../RegisteredActionParameter";
import { BaseParameterOptions } from "../ParameterOptions/BaseParameterOptions";
import { ActionParameterBase } from "./ActionParameterBase";
import { PrimitiveTypes } from "./PrimitiveTypes";

export class ActionParameterPrimitive extends ActionParameterBase {

    type: PrimitiveTypes

    constructor(name: string, type: PrimitiveTypes, parameterOptions: BaseParameterOptions){
        super(name, parameterOptions);
        this.type = type;
        this.parameterTemplate = this.buildTemplate();
    }

    /**
     * Extends the parameter template by overriding the buildTemplate method
     * @returns 
     */
    protected override buildTemplate = (): RegisteredActionParameter<typeof this.type> => {
        const template = {
            type: this.type
        }
       return Object.assign(this.parameterTemplate, template);
    };

    /**
     * Register the parameter by instantiating the parameter type with the parameter name and corresponding action parameter options.
     * @returns 
     */
    public static register = (type: PrimitiveTypes, parameterOptions: BaseParameterOptions) => (target: any, propertyKey: string) => {
        super.registerNewParameter(new ActionParameterPrimitive(propertyKey,type,parameterOptions));
    }
}





