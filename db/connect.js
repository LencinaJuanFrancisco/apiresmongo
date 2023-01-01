const mongoose = require("mongoose");
mongoose.set('strictQuery', false)


// mongoose.connect("mongodb+srv://admin:46FuFyHfNntpXnwc@cluster0.eupj7xs.mongodb.net/?retryWrites=true&w=majority", (error) => {
//   if (error) {
//     console.log("Hubo un error en la conexion a MongoDB 🔥🔥🔥🔥🔥", error);
//   } else {
//     console.log("Conexion exitosa con MongoDB 😎 🚀 😎 🚀");
//   }
// })


mongoose
  .connect(
   'mongodb+srv://admin:adminadmin@cluster0.lxx7glu.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(
    (data) => {
      console.log("😎😎😎 CONECTADOS A MONGO DB ATLAS 😎😎😎");
    },
    (err) => {
      console.log(`🔥🔥🔥 Error en la conexion con MONGODB ${err}🔥🔥🔥`);
    }
  );

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin:<eLIM4X97dN5K0iMC>@cluster0.eupj7xs.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });