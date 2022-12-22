import express from "express";
import config from 'config';
import routes from './router';


import "../config/db"
import Logger from "../config/logger";
import morganMiddleware from "./middleware/morgan-middleware";

const app = express()
app.use(morganMiddleware)
app.use(express.json())

app.use(routes)
const PORT = config.get<number>('port')

app.listen(PORT, async () => {
    Logger.info(`Servidor rodando.. `)
})
