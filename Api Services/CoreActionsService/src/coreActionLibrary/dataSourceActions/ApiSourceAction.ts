import { ActionParameterPrimitive } from "../../Templating/ParameterTemplating/ParameterTypes/ActionParameterPrimitive"
import { ActionRegister } from "../../actionRegistration/ActionRegister"
import { Action } from "../Action"
import { PrimitiveTypes } from "../../Templating/ParameterTemplating/ParameterTypes/PrimitiveTypes";
import { IAction } from "../IAction";




@ActionRegister.registerAction("ApiSourceAction","/apiSource")
export default class ApiSourceAction extends Action{

    @ActionParameterPrimitive.register(PrimitiveTypes.BOOLEAN)
    private test: string = this.getParameter<typeof this.test>("test","");


    execute = (): void => {

    }


    constructor(clone?: IAction){
        super(clone)
    }

 
    override clone = ():  IAction => new ApiSourceAction(this)

}