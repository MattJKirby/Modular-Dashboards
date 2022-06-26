import { ActionRegister } from "./ActionRegister";
import { RegisteredAction } from "./RegisteredAction";

/**
 * Factory singleton that provides action registrations.
 */
export class ActionRegistrationFactory {

    public static newRegistration<ActionType>(actionTypeName: string, actionConstructor: ActionType, actionEndpoint: string): RegisteredAction<ActionType> {
        console.log(ActionRegistrationFactory.validateUniqueActionEndpoint(actionEndpoint));
        return new RegisteredAction<ActionType>(actionTypeName, actionConstructor, actionEndpoint);
    }

    private static validateUniqueActionEndpoint(actionEndpoint: string): string {
        if(ActionRegister.GetActions().find(action => action.endpoint === actionEndpoint) === undefined)
            return actionEndpoint;
        else
            throw new Error("Unable to register action with non-unique endpoint.");    
    }
}


