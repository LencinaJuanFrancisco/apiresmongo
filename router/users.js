const express = require("express");
const { userValidation } = require("../validation/userValidation");
const router = express.Router();
const { User } = require("./../db/Schemas/Users");


router.get("/", async (req, res) => {
  try {
    const allusers = await User.find();
    allusers.length > 0
      ? res.status(200).json({
          message: "Todos los Usuarios",
          CantidadDeUsuarios: allusers.length,
          Usuarios: allusers,
        })
      : res.status(200).json({ message: "Aun no hay registros de Usuarios" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/",userValidation,async (req, res) => {
    const data=req.body
  try {
    const newUser= await new User(data)
    const saveUser= await newUser.save()
    res.status(201).json({
        message:"Usuario creado",
        data: saveUser

    })
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id",async (req, res) => {
  const  {id}  = req.params;
  try {
    const rta = await User.findById(id)
    res.status(200).json(rta)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/:id",async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const rta = await User.findByIdAndUpdate(id,data,{new:true})
    res.status(200).json({
      message:"modificado",
      data
    })
  } catch (error) {
    res.status(400).json({message:error.message})
  }
});
router.delete("/:id",async (req, res) => {
  const { id } = req.params;
  try {
    const rta = await User.findByIdAndDelete(id)
    res.status(201).json({
      message:"Usuario eliminado"
    })
  } catch (error) {
    res.status(400).json({message:error.message })
  }
});
module.exports = router;
