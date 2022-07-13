
import { IAction } from "../coreActionLibrary/IAction";
import { RegisteredActionParameter } from "../parameterRegistration/RegisteredActionParameter";
import { ActionRegistrationFactory } from "./ActionRegistrationFactory";
import { IRegisteredAction } from "./IRegisteredAction";


/**
 * Stores a list of all action types, ensuring they contains all info for successful registration.
 */
export namespace ActionRegister {

    /**
     * Maintain a list of all registered actions
     */
     const registeredActions: IRegisteredAction<ActionConstructor<IAction>>[] = [];

    /**
     * List of all the parameters pertaining to the registered action.
     */
    const actionParameters: RegisteredActionParameter<any>[] = [];
    
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
    export function registerActionType<ActionType extends ActionConstructor<IAction>> (typeName: string, endpoint: string) {
        return (ctor: ActionType) => {
            const newRegistration = ActionRegistrationFactory.newRegistration<ActionType>(typeName, ctor, endpoint);
            newRegistration.registeredParameters = actionParameters.splice(0, actionParameters.length);
            registeredActions.push(newRegistration);
        }
    }

    /**
     * Registers action parameters
     * @param parameter 
     */
    export const registerActionParameter = (parameter: RegisteredActionParameter<any>) => {
        actionParameters.push(parameter)
    }

    /**
     * Obtains a list of all registered actions
     * @returns 
     */
    export const GetActions = (): IRegisteredAction<ActionConstructor<IAction>>[] => {
        return registeredActions;
    }
}


