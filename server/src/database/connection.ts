

import { Sequelize } from "sequelize-typescript"
import { envConfig } from "../config/config"

const sequelize = new Sequelize({
    database : envConfig.database,
    username : envConfig.username,
    password : envConfig.password,
    host : envConfig.host,
    dialect : "mysql",
    port : Number(envConfig.port),
    models: [__dirname + "/models"] 
    
})


sequelize.authenticate()
    .then(() => {
        console.log("Database connection established successfully")
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error)
    })

    sequelize.sync({ alter: false})
    .then(()=>{
        console.log("migrated successfully")
    })


    export default sequelize