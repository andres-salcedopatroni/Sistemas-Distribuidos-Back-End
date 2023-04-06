const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const usuarioSchema=new Schema({
    nombre:String,
    tipo:String,
    clave:String,
    dni_ruc:String,
});
module.exports=mongoose.model('Usuario', usuarioSchema,'Usuario');