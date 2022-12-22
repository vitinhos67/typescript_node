import mongoose from 'mongoose';
import config from "config"
import Logger from "../config/logger";
const  [username, password] = [config.get<string>('username'),config.get<string>('password')]





mongoose.set('strictQuery', true)
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.5deos.mongodb.net/test1`)
const db = mongoose.connection;

db.on('connected', () => Logger.info('Data base connected'));
db.on('error', (error) => Logger.error('error', error));

export default db;






