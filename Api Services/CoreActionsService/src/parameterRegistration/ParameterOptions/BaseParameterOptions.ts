/**
 * These properties define the optional configuration options available for every parameter.
 */
export interface BaseParameterOptions<primitiveType> {
    displayName?: string,
    defaultValue?: primitiveType | null,
    optional?: boolean,
    canEdit?: boolean
}