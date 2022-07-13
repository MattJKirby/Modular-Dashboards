import { IActionParameter } from "../actionParameters/IActionParameter";

/**
 * What can be expected from any action
 */
export interface IAction {
    /**
     * List of Action parameters
     */
    parameters: IActionParameter[]
    /**
     * Executes the action's main functionality
     */
    execute: () => void;

    /**
     * Clones
     */
    clone: () => IAction;
}

  
