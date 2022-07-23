import express, {Application} from 'express';
import { ActionRegister } from './src/actionRegistration/ActionRegister';
import './src/coreActionLibrary/dataSourceActions/'

// Server configuration
const server:Application = express();

// Express and routes configuration
server.use(express.json());


// axios.get("http://home-service:3000/").then(res => {
//   console.log(res.data)
// }


const test = ActionRegister.GetActions()[0]

const abc = new test.ActionType
const abc2 = new test.ActionType

abc.parameters[0].Value = "asdf"





console.log(test.Template)


  server.listen(0, ():void => {
    console.log(`Service: Running here 👉 https://localhost:`);
  });
