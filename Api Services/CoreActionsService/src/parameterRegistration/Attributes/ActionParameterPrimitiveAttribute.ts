import { ActionParameterAttribute } from "./ActionParameterAttribute";

export class ActionParameterPrimitive<primitiveType> extends ActionParameterAttribute<primitiveType> {


    /**
     * Override the registration 
     * @returns 
     */
    public static override register = <primitiveType>(displayName?: string, defaultValue?: primitiveType, optional?: boolean, canEdit?: boolean) => (target: any, propertyKey: string) => {

        const test = new ActionParameterPrimitive<primitiveType>(propertyKey, displayName, defaultValue, optional, canEdit);

       
        super.register(test);
    }

}
