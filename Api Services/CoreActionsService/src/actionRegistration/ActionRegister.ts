import { IAction } from "../coreActionLibrary/IAction";
import { ActionRegistrationFactory } from "./ActionRegistrationFactory";
import { IRegisteredAction } from "./IRegisteredAction";
import { RegisteredAction } from "./RegisteredAction";

/**
 * Stores a list of all action types, ensuring they contains all info for successful registration.
 */
export namespace ActionRegister {
    
    /**
     * Readonly action constructor type using generic
     */
    type ActionConstructor<T> = {
        new(...args: any[]): T;
        readonly prototype: T;
    }

    /**
     * Maintain a list of all registerd actions
     */
    const registeredActions: IRegisteredAction<ActionConstructor<IAction>>[] = [];

    /**
     * Decorator function for registering an action type
     * @param typeName 
     * @param endpoint 
     * @returns 
     */
    export function registerActionType<ActionType extends ActionConstructor<IAction>> (typeName: string, endpoint: string) {
        return (ctor: ActionType) => {
            registeredActions.push(ActionRegistrationFactory.newRegistration<ActionType>(typeName, ctor, endpoint));
        }
    }

    /**
     * Obtains a list of all registered actions
     * @returns 
     */
    export const GetActions = (): IRegisteredAction<ActionConstructor<IAction>>[] => {
        return registeredActions;
    }
}


