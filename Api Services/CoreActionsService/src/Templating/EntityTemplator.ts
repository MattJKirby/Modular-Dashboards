import { ITemplatedEntity as IEntityTemplate } from "./IEntityTemplate";

export class EntityTemplator<T extends IEntityTemplate>{

    /**
     * List of templated entities
     */
    private entityList: T[] = [];

    /**
     * Template a new entity
     * @param entity 
     */
    public templateEntity = (entity:T) =>{
        this.validateUniqueEntityUid(entity.Uid)
        this.entityList.push(entity);
    }

    /**
     * Clone the templated entity list.
     * @returns 
     */
    public cloneTemplateList = ():T[] => {
        return [...this.entityList]
    }

    /**
     * Validate that the entity uid is does not already exist.
     * @param uid
     */
    private validateUniqueEntityUid = (uid: string): void => {
        if(this.entityList.find(e => e.Uid === uid)){
            throw new Error("Can't template existing parameter");
        }
    }
}