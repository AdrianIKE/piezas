import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    "railway",//nombre de la base
    "postgres", // nombre de usuario
    "B4Q1V49rwPfcoeU6xAj8", // contrasena de la base
    {
        host: "containers-us-west-112.railway.app",
        port: 7126,
        dialect: "postgres" //Que motor de base se utiliza
    }
); 