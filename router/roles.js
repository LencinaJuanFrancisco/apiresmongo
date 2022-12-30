const express = require('express')
const router = express.Router()
const {Rol} =require('./../db/Schemas/Roles')

router.get('/',async(req,res)=>{
    try {
        const rta = await Rol.find()
        rta.length > 0 ? res.status(200).json({message:"listado de Roles",Total:rta.length,rta})
                       : res.status(200).json({message:"Ahun no hay registro"})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
router.get('/:id',async(req,res)=>{
    const {id}= req.params
    try {
        const rta = await Rol.findById(id)
        
         res.status(200).json(rta)
                    
    } catch (error) {
        console.log(error);
        res.status(400).json({message:error.message})
    }
})
router.post('/',async(req,res)=>{
    const data = req.body
    try {
        const newRol = await new Rol(data)
        const saveRol = await newRol.save()
        res.status(200).json({message:"Creado",saveRol})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
router.patch('/:id',async(req,res)=>{
    const {id}= req.params
    const data = req.body
    try {
        const rta = await Rol.findByIdAndUpdate(id,data,{new:true})
        res.status(201).json({message:"Rol Actualizado",rta})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
router.delete('/:id',async(req,res)=>{
    const {id}= req.params
    try {
        const rta = await Rol.findByIdAndDelete(id)
        res.status(201).json({message:"Rol eliminado ",data:rta.name})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

module.exports= router