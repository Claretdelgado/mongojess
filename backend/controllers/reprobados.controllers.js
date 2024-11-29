import { modeloReprobados } from "../models/reprobados.model.js";

modeloReprobados.create({
    name:"rod",
    apepat:"el reno",
    matricula: "utm23"
})

export const test= ()=> {
    console.log("llamando controlador")
}