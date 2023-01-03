const express = require('express')
const router = express.Router()
const {Task}= require('./../db/Schemas/Tasks')
const {tasksValidation} = require('../validation/tasksValidation')

router.get('/',async(req,res)=>{
    try {
        const rta = await Task.find()
        res.status(200).json({
            message:"Listados de Tareas",
            Total: rta.length,
            data:rta
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.get('/:id',async(req,res)=>{
    const {id}= req.params
    try {
        const rta = await Task.findById(id)
        res.status(201).json({
            data:rta
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.post('/',tasksValidation,async (req,res)=>{
    const data = req.body
    try {
        const newTask = new Task(data)
        const saveTask =await newTask.save()
        res.status(200).json({
            message:"Creado",
            data:saveTask
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})
router.patch('/:id', async(req,res)=>{
    const {id}= req.params
    const data = req.body
    try {
        const rta = await Task.findByIdAndUpdate(id,data,{new:true})
        res.status(201).json({
            message:"Tarea actualizada",
            data:rta
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})
router.delete('/:id',async(req,res)=>{
    const {id}= req.params
    try {
        const rta = await Task.findByIdAndRemove(id)
        res.status(201).json({message:"eliminado"})
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})
module.exports = router