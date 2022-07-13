/**
 * Defines a an action parameter.
 */
export type IActionParameter = {
    /**
     * Action name.
     */
    Name: string;

    /**
     * Action parameter value.
     */
    Value: any;

    /**
     * Checks if the parameter has a non-null value
     */
    HasValue: boolean;
}