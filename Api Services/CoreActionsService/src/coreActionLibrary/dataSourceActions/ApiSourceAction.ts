import { ActionRegister } from "../../actionRegistration/ActionRegister"
import { IAction } from "../IAction"



@ActionRegister.registerActionType("ApiSourceAction","/apiSource")
export default class ApiSourceAction implements IAction {

    constructor(){
        console.log("test")
    }
    
   execute = (): void => {

    } 
}