import { ActionParameterPrimitive } from "../../parameterRegistration/ParameterTypes/ActionParameterPrimitive"
import { ActionRegister } from "../../actionRegistration/ActionRegister"
import { Action } from "../Action"
import { PrimitiveTypes } from "../../parameterRegistration/ParameterTypes/PrimitiveTypes";
import { IAction } from "../IAction";




@ActionRegister.registerActionType("ApiSourceAction","/apiSource")
export default class ApiSourceAction extends Action{

    @ActionParameterPrimitive.register(PrimitiveTypes.STRING, {displayName: "my test action"})
    private test: string = this.getParameter<typeof this.test>("test","");


    execute = (): void => {

    }


    constructor(clone?: IAction){
        super(clone)
        console.log(true, clone)
    }

 
    override clone = ():  IAction => new ApiSourceAction(this)

}