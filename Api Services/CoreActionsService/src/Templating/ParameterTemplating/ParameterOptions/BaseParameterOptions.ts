/**
 * These properties define the optional configuration options available for every parameter.
 */
export interface BaseParameterOptions {
    displayName?: string,
    defaultValue?: any,
    optional?: boolean,
    canEdit?: boolean
}