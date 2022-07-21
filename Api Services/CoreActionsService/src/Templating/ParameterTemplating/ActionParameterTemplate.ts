import { ITemplatedEntity as IEntityTemplate } from "../IEntityTemplate";


/**
 * Defines common properties of all parameters that are templated on an action.
 */
 export class ActionParameterTemplate<parameterType> implements IEntityTemplate{
    
    /** @inheritDoc */
    Name: string = '';

     /** @inheritDoc */
    Uid: string = '';

     /** @inheritDoc */
    DisplayName: string = '';

     /** @inheritDoc */
    Optional: boolean = false;

    /**
     * Default action parameter.
     */
    DefaultValue: parameterType | null = null;

    /**
     * Allows the user to edit the parameter or not.
     */
    CanEdit: boolean = false;

    /**
     * Construct the template using partial constructor
     * @param v 
     */
    constructor(v?: Partial<ActionParameterTemplate<any>>) {
        Object.assign(this, v);
    }
}