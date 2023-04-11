const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const productoSchema=new Schema({
    codigoVendedor:String,
    nombre:String,
    categoria:String,
    precio:Number,
    medida:String
});
module.exports=mongoose.model('Producto', productoSchema,'Producto');