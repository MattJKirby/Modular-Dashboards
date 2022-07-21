import { ITemplatedEntity as IEntityTemplate } from "./IEntityTemplate";

export class ActionEntityTemplator{

    /**
     * Typename of the action being templated
     */
    public ActionTypeName: string;

    /**
     * List of all templated entities.
     */
    private entityTemplateList: IEntityTemplate[] = [];

    constructor(actionTypeName: string){
        this.ActionTypeName = actionTypeName;
    }

    /**
     * Templates a new entity.
     * @param entity 
     */
    public templateEntity = (entity: IEntityTemplate) => {
        // Ensure entity uid is unique.
        this.validateUniqueEntityUid(entity.Uid);

        this.entityTemplateList.push(entity)
    }

    /**
     * Shallow copy the entity template list
     */
    public find<A extends IEntityTemplate>(cls: new() => A): A[] | undefined {
        return [...this.entityTemplateList.filter((value): value is A => value instanceof cls)];
      }

    /**
     * Validate that the entity uid is does not already exist.
     * @param uid
     */
    private validateUniqueEntityUid = (uid: string): void => {
        if(this.entityTemplateList.find(e => e.Uid === uid)){
            throw new Error("Can't template existing parameter");
        }
    }
}