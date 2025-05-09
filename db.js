import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const initMySQL = async () => {


    console.log("\n");
    console.log("=================================");
    console.log("======Connecting to MySQL========");
    console.log("=================================");

    try{

        const db = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        const [rows, fields] = await db.query('SHOW TABLES;');
        console.log(rows);
        console.log(fields);

        console.log("Connected to MySQL database");
        console.log("=================================");

        return db;

    } catch (err){

        console.log("Connection with MySQL failed...");
        console.error(err.message);
        console.log("=================================");
        return err.message;

    }


}

export default initMySQL