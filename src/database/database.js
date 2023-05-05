import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    "piezas",//nombre de la base
    "postgres", // nombre de usuario
    "1234", // contrasena de la base
    {
        host: "localhost",
        port: 5432,
        dialect: "postgres" //Que motor de base se utiliza
    }
); 