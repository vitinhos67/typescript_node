import {Request, Response} from "express"
import Movie from "../model/Movie"
import Logger from "../../config/logger"

export async function createMovie(req: Request, res: Response) {
    try {
        const {body} = req
        const insertMovie = await Movie.create({
            title: body.title
        })
        return res.status(200).json(insertMovie)
    } catch (error) {
        
    }
}