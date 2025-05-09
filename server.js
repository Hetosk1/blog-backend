import express from 'express';
import dotenv from 'dotenv';
import initMySQL from './db.js';
import initRedis from './cache.js';

const app = express();
app.use(express.json());
dotenv.config();

const db = await initMySQL();
const client = await initRedis();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
