
import { Router, Request, Response } from 'express'
import { createMovie,getMovie, getMovies } from './controllers/movie.handler'
import { validate } from './middleware/errors.validator'
import { movieCreateValidation  } from './middleware/movie.validator'
const router = Router()

router.get('/home', (req: Request, res: Response) => {
    res.send('Um bom tempo')
})
router.get('/movies', getMovies)
router.post('/movie', movieCreateValidation(),validate ,createMovie)
router.get('/movies/:id', getMovie)



export default router;