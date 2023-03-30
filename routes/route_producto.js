var express = require('express');
var router = express.Router();
const conexion_mongoose='mongodb+srv://usuario:12345@cluster0.iysppsa.mongodb.net/SD?retryWrites=true'
const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const Producto=mongoose.model("Producto", new Schema({}),'Producto');

//Obtener productos
router.get('/', async function(req, res, next) {
  await mongoose.connect(conexion_mongoose);
  try{
    const producto=await Producto.find();
    const filtro=[]
    for (let p in producto) {
      const s=producto[p].toJSON();
      if(s.nombre.includes(req.query.nombre)){
        console.log(s.nombre.includes(req.query.nombre));
        console.log(req.query.nombre)
        filtro.push(s);
      }
        
    }
    console.log(producto);
    res.json(filtro);
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

module.exports = router;
