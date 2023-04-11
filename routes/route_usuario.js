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

module.exports = router;
