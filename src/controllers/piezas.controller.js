import modelosInit from '../models/init-models.js'
import { sequelize } from '../database/database.js'
import { Op } from "sequelize";
let modelos = modelosInit(sequelize)

export const getPiezas = async (req,res) =>{
    let response;
    try {
        response = await modelos.piezas.findAll()
    } catch (error) {
        console.error(error);
        res.status(500).json({"error": error});
    }
    res.status(200).json(response)
}

export const getPiezasCategoria = async (req,res) =>{
    let response;
    try {
        response = await modelos.piezas.findAll({
            attributes: {exclude:['precio','id_pieza']},
            include:[{
                model: modelos.categorias,
                as: "categoria",
                attributes: {exclude:['id_categoria']}
            },
            {
                model: modelos.pieza_proveedor,
                as: "entregas",
                attributes: {exclude:['id_distribucion','proveedor_id','pieza_id']},
                include:{
                    model: modelos.proveedores,
                    as: "proveedor",
                    attributes: {exclude:['id_proveedor']}
                }
            }
        ]})
    } catch (error) {
        console.error(error);
        res.status(500).json({"error": error});
    }
    res.status(200).json(response)
}

export const createPiezas = async (req,res) =>{
    let {id_pieza,nombre,color,precio,categoria_id,precio_dinero} = req.body;
    let response = null;
    try {
        response = await modelos.piezas.create(req.body)
        /*response = await modelos.piezas.create({
            id_pieza,
            nombre,
            color,
            precio,
            categoria_id,
            precio_dinero
        });*/
    } catch (error) {
        console.error(error);
        res.status(500).json({"error": error});
    }
    res.status(201).json(response)
}

export const changePiezas = async (req,res) =>{
    let response;
    let {id} = req.params;
    try {
        response = await modelos.piezas.update(req.body,{where:{id_pieza:id}})
    } catch (error) {
        console.error(error);
        res.status(500).json({"error": error});
    }
    res.status(200).json(response)
}
export const deletePiezas = async (req,res) =>{
    let response;
    let {id} = req.params;
    try {
        response = await modelos.piezas.destroy({where:{id_pieza:id}})
    } catch (error) {
        console.error(error);
        res.status(500).json({"error": error});
    }
    res.status(200).json(response)
}

