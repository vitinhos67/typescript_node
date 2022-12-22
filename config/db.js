"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
const logger_1 = __importDefault(require("../config/logger"));
const [username, password] = [config_1.default.get('username'), config_1.default.get('password')];
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect(`mongodb+srv://${username}:${password}@cluster0.5deos.mongodb.net/test1`);
const db = mongoose_1.default.connection;
db.on('connected', () => logger_1.default.info('Data base connected'));
db.on('error', (error) => logger_1.default.error('error', error));
exports.default = db;
