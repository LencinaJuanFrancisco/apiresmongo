const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rolSchema = new Schema({
    name: String,
    description:String
})
rolSchema.set('toJSON',{
    transform: (document, returnedObjet)=>{
        returnedObjet.id = returnedObjet._id
        delete returnedObjet._id
        delete returnedObjet.__v
    }
})

const Rol = mongoose.model('Rol',rolSchema)
module.exports={Rol}