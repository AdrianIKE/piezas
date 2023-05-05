// MVC <- modelos , vistas , controladores 
//modelos - Espejos de la base
//Vistas(Routes) - Accesar a la funcionalidad
//Controladores - funcionalidad en si
/* JSON -> JS Object Notation

    "animal":{
        "color": "rojo"
        "raza" : "perico"
    }

    https://comex.com.mx/api/color/34F56 <- URL Encoded
    https://comex.com.mx/api?color=34F56 <- URL UNENCODED
    https://www.youtube.com/watch?v=tNO5B3fYV8s&ab_channel=ForjadeOceo

    ORM -> Object Relational Mapping

*/

import express from 'express';
import rutasPieza from './routes/piezas.routes.js';
import { sequelize } from './database/database.js';

async function main(){
    //Manejo de excepciones
    try{
        await sequelize.sync({force:false});
        await sequelize.authenticate();
        console.log("Conexion exitosa");
    }catch(error){
        console.log("Conexion fallida, error -> "+error);
    }
    const app = express(); // Inicializa el servidor
    app.use(express.json()); // Se va a comunicar atraves de JSON
    app.use(express.urlencoded({extended:false})); // Permite o no parametros
    app.use(rutasPieza); // Se va a comunicacion
    app.listen(3000);
    console.log("El servidor esta escuchando");
}

main();


