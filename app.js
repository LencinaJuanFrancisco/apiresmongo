require('./db/connect')//conecto con la db
const express = require('express')
const app= express()

const userRouter = require('./router/users')
const rolRouter = require('./router/roles')
const taskRouter = require('./router/tasks')

const PORT=3000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('home')
})
app.use("/users",userRouter)
app.use("/roles",rolRouter)
app.use('/tasks',taskRouter)

app.listen(PORT,()=>{
    console.log(`server 🏃🏃 en puerto https://localhost:${PORT}` );
})