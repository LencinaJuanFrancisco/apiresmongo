require('./db/connect')//conecto con la db
const express = require('express')
const app= express()
const userRouter = require('./router/users')
const PORT=3000
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('home')
})
app.use("/users",userRouter)

app.listen(PORT,()=>{
    console.log(`server 🏃🏃 en puerto https://localhost:${PORT}` );
})