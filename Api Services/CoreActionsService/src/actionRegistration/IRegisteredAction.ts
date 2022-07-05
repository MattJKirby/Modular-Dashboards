import { IRegisteredActionParameter } from "../parameterRegistration/IRegisteredActionParameter";

/**
 * Determines what we expect from a registered action
 */
export interface IRegisteredAction<ActionType> {
    typeName: string;
    actionType: ActionType;
    endpoint: string;
    preview: boolean;
    displayName: string;
    description: string;
    registeredParameters: IRegisteredActionParameter<any>[];
}