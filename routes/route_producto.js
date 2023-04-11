var express = require('express');
var router = express.Router();
const Producto=require('../schemas/producto');

//Obtener productos
router.get('/', async function(req, res, next) {
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
