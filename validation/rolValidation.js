const {check,validationResult}= require('express-validator')


const rolValidation = [
    check('name')
    .notEmpty().withMessage('El nombre no debe estar vacio')
    .isLength({min:3}).withMessage('El nombre debe contener al menos 3 caracteres')
    .isLength({max:40}).withMessage('El nombre no puede exceder los 40 caracteres'),
check('description')
    .notEmpty().withMessage('La descripción no debe estar vacio')
    .isLength({min:10}).withMessage('La descripción debe contener al menos 10 caracteres')
    .isLength({max:120}).withMessage('La descripción no puede exceder los 120 caracteres'),

    (req,res,next)=>{
        try {
            validationResult(req).throw()
            return next()
        } catch (error) {
            res.status(403).json({
              message: error.array()
            })
        }
    }
]

module.exports = {rolValidation}