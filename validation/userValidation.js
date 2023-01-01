const {validationResult, check} = require('express-validator')

const userValidation = [
    check('name')
        .isEmpty().withMessage('El nombre no debe estar vacio')
        .isLength({min:3}).withMessage('El nombre debe contener al menos 3 caracteres')
        .isLength({max:40}).withMessage('El nombre no puede exceder los 40 caracteres'),
    check('lastName')
        .isEmpty().withMessage('El apellido no debe estar vacio')
        .isLength({min:3}).withMessage('El nombre debe contener al menos 3 caracteres')
        .isLength({max:40}).withMessage('El nombre no puede exceder los 40 caracteres'),
    check('addres')
        .isEmpty().withMessage('Debe ingresar una direccion')
        .isLength({min:7}).withMessage('La direccion debe contener al menos 7 caracteres')
        .isLength({max:40}).withMessage('La dirección no puede exceder los 40 caracteres'),
    check('age')
        .isEmpty().withMessage('Debe ingresar su edad')
        .isNumeric().withMessage('La edad debe ser un numero')
        .custom((value,{req})=>{
         if  ( value < 18 ){
             throw new Error('Debe ser mayor de 18 para poder Registrarse')
             }           
             return true
        }),
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

module.exports = {userValidation}