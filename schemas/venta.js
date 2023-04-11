const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const ventaSchema=new Schema({
    nombreProducto:String,
    codigoVendedor:String,
    codigoComprador:String,
});
module.exports=mongoose.model('Venta',ventaSchema,'Venta');