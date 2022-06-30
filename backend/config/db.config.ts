import { DataSource } from "typeorm"
import Company from "../Entity/Company"
import dotenv from "dotenv"

dotenv.config()

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: "companydb",
    synchronize: true,
    entities: [Company],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))
export default AppDataSource