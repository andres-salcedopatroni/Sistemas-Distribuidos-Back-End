const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const patrocinioSchema=new Schema({
    codigoPatrocinador:String,
    codigoPatrocinado:String,
    cantidadInvertida:Number,
});
module.exports=mongoose.model('Patrocinio',patrocinioSchema,'Patrocinio');