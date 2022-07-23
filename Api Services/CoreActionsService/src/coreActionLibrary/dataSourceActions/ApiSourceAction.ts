import { ActionParameterPrimitive } from "../../Templating/ParameterTemplating/ParameterTypes/ActionParameterPrimitive"
import { ActionRegister } from "../../actionRegistration/ActionRegister"
import { Action } from "../Action"
import { PrimitiveTypes } from "../../Templating/ParameterTemplating/ParameterTypes/PrimitiveTypes";
import { IAction } from "../IAction";
import { ActionTemplator } from "../../Templating/ActionTemplator";
import { Templator } from "../../Templating/Templator";




@ActionRegister.registerAction("ApiSourceAction","/apiSource")
@Templator.previewFeature(true)
export default class ApiSourceAction extends Action{

    @ActionParameterPrimitive.register(PrimitiveTypes.STRING)
    private test: string = this.getParameter<typeof this.test>("test","");


    execute = (): void => {

    }


    constructor(clone?: IAction){
        super(clone)
    }

 
    override clone = ():  IAction => new ApiSourceAction(this)

}