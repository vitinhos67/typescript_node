
import { Router, Request, Response } from 'express'
import { createMovie } from './controllers/movie.handler'
import { validate } from './middleware/errors.validator'
import { movieCreateValidation } from './middleware/movie.validator'
const router = Router()

router.get('/home', (req: Request, res: Response) => {
    res.send('Um bom tempo')
})

router.post('/movie', movieCreateValidation(),validate ,createMovie)


export default router;