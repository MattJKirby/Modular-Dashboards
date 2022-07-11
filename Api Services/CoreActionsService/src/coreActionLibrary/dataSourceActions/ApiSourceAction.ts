import { ActionParameterPrimitive } from "../../parameterRegistration/ParameterTypes/ActionParameterPrimitive"
import { ActionRegister } from "../../actionRegistration/ActionRegister"
import { Action } from "../Action"




@ActionRegister.registerActionType("ApiSourceAction","/apiSource")
export default class ApiSourceAction extends Action{

    @ActionParameterPrimitive.register<string>({displayName: "my test action"})
    public test: string = this.getParameter<typeof this.test>("test","");

    @ActionParameterPrimitive.register<boolean>({displayName: "my test action"})
    public test2: boolean = this.getParameter<typeof this.test2>("test",false);

    @ActionParameterPrimitive.register<boolean>({displayName: "my test action"})
    public test3: boolean = this.getParameter<typeof this.test3>("test",false);

    constructor(){
        super()
    }
    
    execute = (): void => {

    }

}