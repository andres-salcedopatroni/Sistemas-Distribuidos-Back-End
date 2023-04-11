var express = require('express');
var router = express.Router();
const Usuario=require('../schemas/usuario');

//Obtener usuario
router.get('/ingreso', async function(req, res, next) {
  try{
    const usuario=await Usuario.findOne({"dni_ruc": req.query.dni_ruc, "clave": req.query.clave},{"dni_ruc":1,"nombre":1,"tipo":1});
    console.log(usuario);
    res.json(usuario);
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Obtener usuarios
router.get('/usuarios', async function(req, res, next) {
  try{
    const usuario=await Usuario.find({},{"dni_ruc":1,"nombre":1,"tipo":1});
    console.log(usuario);
    res.json(usuario);
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Crear usuario
router.post('/crear', async function(req, res, next) {
  try{
    console.log(req.body)
    res.json(await Usuario.create(req.body));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Actualizar usuario
router.put('/actualizar', async function(req, res, next) {
  try{
    res.json(await Usuario.updateOne({"dni_ruc": req.query.dni_ruc}, req.body));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Eliminar usuario
router.delete('/eliminar', async function(req, res, next) {
  try{
    res.json(await Usuario.deleteOne({"dni_ruc": req.query.dni_ruc}));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});


module.exports = router;
