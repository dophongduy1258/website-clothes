var mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    status:Boolean,
    quantity:Number,
    description:String,
},{
    collection:'Product'
}
);

var ProductModel = mongoose.model('Product',productSchema);
module.exports= ProductModel; 
// export default mongoose.model('product',productSchema)