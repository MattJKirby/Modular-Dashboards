import { IAction } from "../../../coreActionLibrary/IAction";
import { ActionParameterTemplate } from "../ActionParameterTemplate";
import { BaseParameterOptions } from "../ParameterOptions/BaseParameterOptions";
import { ActionParameterBase } from "./ActionParameterBase";
import { PrimitiveTypes } from "./PrimitiveTypes";

export class ActionParameterPrimitive extends ActionParameterBase<ActionParameterPrimitive> {

    public type: PrimitiveTypes = PrimitiveTypes.STRING

    /**
     * 
     * @param v Construct using partial and some required fields
     */
    constructor(v: Partial<ActionParameterPrimitive> & { name: string }) {
        super(v)
        Object.assign(this, v);
    }

    /**
     * Extends the parameter template by overriding the buildTemplate method
     * @returns 
     */
    protected override buildTemplate = (): ActionParameterTemplate<typeof this.type> => {
        return Object.assign(super.buildTemplate(), {
            Type: this.type
        }); 
    };

    /**
     * Register the parameter by instantiating the parameter type with the parameter name and corresponding action parameter options.
     * @returns 
     */
    public static register = (type: PrimitiveTypes, parameterOptions?: BaseParameterOptions) => (target: IAction, propertyKey: string) => {
        super.registerNewParameter(target.constructor.name, new ActionParameterPrimitive({name: propertyKey, type: type, ...parameterOptions}));
    }
}





