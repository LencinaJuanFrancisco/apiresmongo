const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskShema = new Schema ({
    name: String,
    description:String
})
taskShema.set('toJSON',{ 
    transform: (document, returnedObjet)=>{
        returnedObjet.id = returnedObjet._id
        delete returnedObjet._id
        delete returnedObjet.__v
    }
})
const Task = mongoose.model('Task',taskShema)
module.exports={Task}