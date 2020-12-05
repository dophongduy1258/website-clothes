const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/clothe-db', {useNewUrlParser: true});


const product = new mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String,
},{
    collection:'Product'
}
);


var ProductModel = mongoose.model('Product',product);



ProductModel.find({})
.then(function(data){
    // console.log('data',data);
})
.catch(function(err){
    console.log('error',err);
})






