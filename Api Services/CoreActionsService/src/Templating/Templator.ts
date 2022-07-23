import { ActionTemplator } from "./ActionTemplator";

export namespace Templator {
 
    /**
     * List of active entity templators.
     */
    const actionTemplators: ActionTemplator[] = [];

   /**
    * Returns an action templator by the its associated ActionTypeName
    * @param actionTypeName 
    * @returns 
    */
    export const getActionTemplator = (actionTypeName: string): ActionTemplator => {
        const existingTemplator = actionTemplators.find(t => t.ActionType === actionTypeName);
        
        if(existingTemplator === undefined)
            actionTemplators.push(new ActionTemplator(actionTypeName));
        
        return existingTemplator || actionTemplators[actionTemplators.length -1];
    }

    /**
     * Decorator function to enable to user to specify if the action is in preview or not.
     * @param isPreview 
     * @returns 
     */
    export const previewFeature = (isPreview: boolean): any => {
        return (ctor: Function) => {
          getActionTemplator(ctor.name), 'Previewxx', {value: isPreview, writable: false};
        }
    }
}
