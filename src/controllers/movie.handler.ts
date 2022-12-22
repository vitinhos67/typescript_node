import {Request, Response} from "express"
import Movie from "../model/Movie"
import Logger from "../../config/logger"

export async function createMovie(req: Request, res: Response) {
    try {
        const {body} = req
        const insertMovie = await Movie.create({
            title: body.title,
            director: body.director,
            description: body.description,
            rating: body.rating,
            poster: body.poster

        })
        return res.status(200).json(insertMovie)
    } catch (error) {
        
    }
}

export async function getMovie(req: Request, res: Response) {
    try {
        const {id} = req.params

        const insertMovie = await Movie.findById(id)

        if(!insertMovie) {
            return res.status(404).json({
                message: "Filme nao encontrado"
            })
        }

        return res.status(200).json(insertMovie)
    } catch (error) {
        console.log(error)
    }
}


export async function getMovies(req: Request, res: Response) {
    try {

        const insertMovie = await Movie.find()
        return res.status(200).json(insertMovie)
    } catch (error) {
        
    }
}