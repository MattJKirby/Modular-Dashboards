import { ActionRegister } from "./ActionRegister";
import { RegisteredAction } from "./RegisteredAction";

/**
 * Factory singleton that provides action registrations.
 */
export class ActionRegistrationFactory {

    /**
     * Generate a new registered action.
     */
    public static newRegistration<ActionType>(actionTypeName: string, actionConstructor: ActionType, actionEndpoint: string): RegisteredAction<ActionType> {
        return new RegisteredAction<ActionType>(actionTypeName, actionConstructor, ActionRegistrationFactory.validateUniqueActionEndpoint(actionEndpoint));
    }

    /**
     * Ensure that the generated action has a unique endpoint.
     */
    private static validateUniqueActionEndpoint(actionEndpoint: string): string {
        if(ActionRegister.GetActions().find(action => action.Endpoint === actionEndpoint) === undefined)
            return actionEndpoint;
        else
            throw new Error("Unable to register action with non-unique endpoint.");    
    }
}


