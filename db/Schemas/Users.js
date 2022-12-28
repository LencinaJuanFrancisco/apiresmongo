const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:String,
    lastName:String,
    addres:String,
    age:Number
})

userSchema.set('toJSON',{
    transform: (document, returnedObjet)=>{
        returnedObjet.id = returnedObjet._id
        delete returnedObjet._id
        delete returnedObjet.__v
    }
})
const User = mongoose.model('User',userSchema)

module.exports = {
    User
}