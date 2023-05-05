import modelosInit from '../models/init-models.js'
import { sequelize } from '../database/database.js'
let modelos = modelosInit(sequelize)

export const hola = async (req,res) => {
    let response;
    try {
        response = await modelos.piezas.findAll()
    } catch (error) {
        console.error(error);
        res.status(500).json({"error": error});
    }
    res.status(200).json(response)
}

export const nombreA = (req,res) => {
    let {nombre,apellido} = req.params;
    res.status(200).json({"respuesta":"Hola "+nombre+apellido})
}

export const persona = (req,res) =>{
    let {nombre,apellidos} = req.body;
    console.log(nombre)
    res.status(200).json(req.body);
}