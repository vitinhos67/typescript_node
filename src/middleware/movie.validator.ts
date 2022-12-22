import { body } from "express-validator";


export const movieCreateValidation = () => {
    return [
        body('title')
        .isString()
        .withMessage('Titulo e obrigatorio'),
        
        body('rating')
        .isNumeric(),
        
        body('description')
        .isString()
        .withMessage('Descrição precisa ser uma string')
    ]
}