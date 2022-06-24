import express, {Application} from 'express';


// Server configuration
const server:Application = express();



// Express and routes configuration
server.use(express.json());


// axios.get("http://home-service:3000/").then(res => {
//   console.log(res.data)
// })





  server.listen(0, ():void => {
    console.log(`Service: Running here 👉 https://localhost:`);
  });
