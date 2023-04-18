var express = require('express');
var router = express.Router();
const Producto=require('../schemas/producto');

//Obtener productos
router.get('/', async function(req, res, next) {
  try{
    const producto=await Producto.find();
    console.log(producto);
    res.json(producto);
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Obtener filtro
router.get('/filtro', async function(req, res, next) {
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

//Crear producto
router.post('/crear', async function(req, res, next) {
  try{
    console.log(req.body)
    res.json(await Producto.create(req.body));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Actualizar producto
router.put('/actualizar', async function(req, res, next) {
  try{
    res.json(await Producto.updateOne({"codigoVendedor": req.query.codigoVendedor,"nombre":req.query.nombre}, req.body));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Eliminar producto
router.delete('/eliminar', async function(req, res, next) {
  try{
    res.json(await Producto.deleteOne({"codigoVendedor": req.query.codigoVendedor,"nombre":req.query.nombre}));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

module.exports = router;
