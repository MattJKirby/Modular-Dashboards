
import { IAction } from "../coreActionLibrary/IAction";
import { IActionTemplate } from "../Templating/ActionTemplating/IActionTemplate";
import { ActionParameterTemplate } from "../Templating/ParameterTemplating/ActionParameterTemplate";
import { Templator } from "../Templating/Templator";
import { ActionRegistrationFactory } from "./ActionRegistrationFactory";
import { RegisteredAction } from "./RegisteredAction";

/**
 * Stores a list of all action types, ensuring they contains all info for successful registration.
 */
export namespace ActionRegister {

    /**
     * Maintain a list of all registered actions
     */
     const registeredActions: RegisteredAction<ActionConstructor<IAction>>[] = [];
    
    /**
     * Readonly action constructor type using generic
     */
    type ActionConstructor<T> = {
        new(...args: any[]): T;
        readonly prototype: T;
    }

    /**
     * Decorator function for registering an action type
     * @param typeName 
     * @param endpoint 
     * @returns 
     */
    export function registerAction<ActionType extends ActionConstructor<IAction>> (typeName: string, endpoint: string) {
        return (ctor: ActionType) => {
            const newRegistration = ActionRegistrationFactory.newRegistration<ActionType>(typeName, ctor, endpoint,requestTemplate(typeName));
            registeredActions.push(newRegistration);
        }
    }

    /**
     * Obtains a list of all registered actions
     * @returns 
     */
    export const GetActions = (): RegisteredAction<ActionConstructor<IAction>>[] => {
        return registeredActions;
    }

    /**
     * Request a template from the templator by the typename
     * @param typeName 
     * @returns 
     */
    const requestTemplate = (typeName: string): IActionTemplate => {
        const templator = Templator.getActionTemplator(typeName);
        return templator.generateActionTemplate()
    }
}


