import { ActionParameterPrimitive } from "../../parameterRegistration/Attributes/ActionParameterPrimitiveAttribute"
import { ActionParameter } from "../../actionParameters/ActionParameter"
import { IActionParameter } from "../../actionParameters/IActionParameter"
import { ActionRegister } from "../../actionRegistration/ActionRegister"
import { Action } from "../Action"




@ActionRegister.registerActionType("ApiSourceAction","/apiSource")
export default class ApiSourceAction extends Action{

    @ActionParameterPrimitive.register<string>("my action", false, true)
    public test: string = this.getParameter<string>("test")

    constructor(){
        super()
    }
    
    execute = (): void => {

    }

}