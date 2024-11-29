import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test} from "./backend/controllers/reprobados.controllers.js"

//trae  o manda a llamar a los .env
dotenv.config();
//conectar a mongo
mongoose.connect(process.env.url_db)
//para mandar msj si funciona o no
.then(()=>{
    console.log("funciona la base")
})
.catch((error)=>{
    console.log("no funciona la base", error)
})
//creacion de servidor local
const app= express();
app.use(cors())
app.listen(4000, ()=>{
    console.log("se escucha bien")
})

test()
