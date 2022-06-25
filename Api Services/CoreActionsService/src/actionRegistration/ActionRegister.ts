import { IAction } from "../coreActionLibrary/IAction";
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
     * Maintain a list of action types
     */
    const actionTypes: ActionConstructor<IAction>[] = [];

    /**
     * Maintain a list of all registerd actions
     */
    const registeredActions: IRegisteredAction<any>[] = [];

    /**
     * Decorator function for registering an action type
     * @param typeName 
     * @param endpoint 
     * @returns 
     */
    export function registerActionType<ActionType extends ActionConstructor<IAction>> (typeName: string, endpoint: string) {
        return (ctor: ActionType) => {
            console.log("Plugin found: " + endpoint);
            actionTypes.push(ctor)
            registeredActions.push(new RegisteredAction<ActionType>(typeName,ctor))
        }
    }

    export const GetActionTypes = (): ActionConstructor<IAction>[] => {
        console.log(actionTypes.length)
        return actionTypes;
    }

    export const GetActions = (): IRegisteredAction<IAction>[] => {
        return registeredActions;
    }
  }


