//package import
import express from 'express'

//Files import
import {PORT} from './config/serverConfig.js'

const setupAndStartSever = async ()=>{

    const app = express();

    //middlewares
    app.use(express.json);  //inbuilt parsing middleware(like body-parser)
    app.use(express.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`Server is running on Port : ${PORT}`);
    })

}

setupAndStartSever();
