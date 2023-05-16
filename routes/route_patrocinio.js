var express = require('express');
var router = express.Router();
const Patrocinio=require('../schemas/patrocinio');

//Obtener patrocinio
router.get('/', async function(req, res, next) {
  try{
    const patrocinio=await Patrocinio.find();
    console.log(patrocinio);
    res.json(patrocinio);
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Crear patrocinio
router.post('/crear', async function(req, res, next) {
  try{
    console.log(req.body)
    res.json(await Patrocinio.create(req.body));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});


module.exports = router;