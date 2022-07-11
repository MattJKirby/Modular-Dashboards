/**
 * Defines a an action parameter.
 */
export type IActionParameter<parameterType> = {
    /**
     * Action name.
     */
    name: string;

    /**
     * Action parameter value.
     */
    value: parameterType;
}