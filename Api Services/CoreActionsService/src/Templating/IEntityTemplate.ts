/**
 * Common properties on all templated entities
 */
export interface ITemplatedEntity {
   /**
     * Templated entity name
     */
    Name: string;

    /**
     * Unique Id of the templated entity
     */
    Uid: string;

    /**
     * Display friendly version of the templated entity
     */
    DisplayName: string;

    /**
     * If a value for the templated entity must be present.
     */
     Optional: boolean;
}