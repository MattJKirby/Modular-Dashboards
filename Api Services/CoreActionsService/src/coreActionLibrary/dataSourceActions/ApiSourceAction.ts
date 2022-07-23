import { ActionParameterPrimitive } from "../../Templating/ParameterTemplating/ParameterTypes/ActionParameterPrimitive"
import { ActionRegister } from "../../actionRegistration/ActionRegister"
import { Action } from "../Action"
import { PrimitiveTypes } from "../../Templating/ParameterTemplating/ParameterTypes/PrimitiveTypes";
import { IAction } from "../IAction";
import { Description, DisplayName, PreviewFeature } from "../../Templating/Templator";


@ActionRegister.registerAction("ApiSourceAction","/apiSource")
@PreviewFeature(false)
@Description("This is my action description")
@DisplayName("DISPLAY NAME")
export default class ApiSourceAction extends Action{

    @ActionParameterPrimitive.register(PrimitiveTypes.STRING)
    private test: boolean = this.getParameter<typeof this.test>("test", false).Value;


    execute = (): void => {

    }


    constructor(clone?: IAction){
        super(clone)
    }

 
    override clone = ():  IAction => new ApiSourceAction(this)

}