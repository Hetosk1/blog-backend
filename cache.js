import { createClient } from "redis";
import dotenv from 'dotenv';

dotenv.config();

const initRedis = async () => {

    console.log("======Connecting to Redis========");
    console.log("=================================");


    const client = await createClient({
        url: process.env.REDIS_URL
    });



    client.on('connect', () => console.log("Connected to Redis"));
    client.on('error', err => console.log('Connection failed: ' + err));

    try {
        await client.connect();         
        client.set('key', 'value');
        const value = await client.get('key');
        console.log("Value for key: ", value);
        console.log("=================================");
        return client;
    } catch (err) {
        console.error("Failed to connect to Redis:", err);
        console.log("=================================");
        process.exit(1); 
    }

}

export default initRedis;