import dotenv from "dotenv"
dotenv.config()

export default {
    port: 3001,
    username: process.env.username,
    password: process.env.password,
    env: process.env.NODE_ENV
}