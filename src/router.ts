
import { Router, Request, Response } from 'express'

const router = Router()

router.get('/home', (req: Request, res: Response) => {
    res.send('Um bom tempo')
})


export default router;