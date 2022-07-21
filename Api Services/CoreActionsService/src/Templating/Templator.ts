import { ActionEntityTemplator } from "./ActionEntityTemplator";
import { ITemplatedEntity } from "./IEntityTemplate";

export namespace Templator {
 
    /**
     * List of active entity templators.
     */
    const entityTemplators: ActionEntityTemplator[] = [];

    /**
     * Templates a new entity.
     * @param entity 
     */
    export const templateEntity = <T extends ITemplatedEntity>(actionTypeName: string, entity:T): void => getOrCreateTemplator(actionTypeName).templateEntity(entity);

    /**
     * Get template by actionTypeName. Throws exception if no templator exists with that name
     */
    export const getTemplator = (actionTypeName: string): ActionEntityTemplator => {
        const templator = entityTemplators.find(t => t.ActionTypeName === actionTypeName)
        if(templator === undefined)
            throw new Error(`Templator with type name ${actionTypeName} does not exist.`);

        return templator;
    }

    /**
     * Return templator that matches provided arg or create a new one and return
     * @param actionTypeName 
     * @returns 
     */
    const getOrCreateTemplator = (actionTypeName: string): ActionEntityTemplator => {
        try{
            return getTemplator(actionTypeName);
        } catch (error){
             //Create new templator if one does not exist with the specified actionTypeName
            entityTemplators.push(new ActionEntityTemplator(actionTypeName));
            return entityTemplators[entityTemplators.length -1];
        }     
    }
}
