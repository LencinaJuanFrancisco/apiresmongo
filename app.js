require('./db/connect')//conecto con la db
const express = require('express')
const routerApi = require('./router')
const app= express()



const PORT=3000

app.use(express.json())

routerApi(app)

app.get('/',(req,res)=>{
    res.send('home')
})


app.listen(PORT,()=>{
    console.log(`server 🏃🏃 en puerto https://localhost:${PORT}` );
})