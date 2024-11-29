import { Schema, model } from "mongoose";
//shema
const EsquemaReprobados= new Schema({
    name:String,
    apepat:String,
    matricula:String
})
//coleccion
export const modeloReprobados= new model("tabla de reprobados", EsquemaReprobados)