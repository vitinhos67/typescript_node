
import { Router, Request, Response } from 'express'
import { createMovie } from './controllers/movie.handler'
const router = Router()

router.get('/home', (req: Request, res: Response) => {
    res.send('Um bom tempo')
})

router.post('/movie', createMovie)


export default router;