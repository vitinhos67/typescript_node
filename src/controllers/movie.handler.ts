import {Request, Response} from "express"
import Movie from "../model/Movie"
import Logger from "../../config/logger"

export async function createMovie(req: Request, res: Response) {
    return res.status(200).json({status:200})
}