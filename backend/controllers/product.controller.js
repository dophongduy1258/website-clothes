var ProductModel = require('../models/product.model');

module.exports.listProduct = (req,res)=>{
    // var product = await Product.find()
        // .then((data)=>{
        //     console.log("Data : ",data);
        //     res.json(data);
        // })
        // .catch((error)=>{
        //     console.log('Error : ',error);
        // });
        // Product.find({})
        //     .then(data => console.log('data',data))
        //     .catch(err =>res.status(400).json('Error : '+err) );

        
        ProductModel.find({})
            .then(function(data){   
                console.log('data',data);
                res.json(data)
            })
            .catch(function(err){
                console.log('error',err);
            })
    }

module.exports.add = (req,res)=>{

    const dbClothe = req.body;
    ProductModel.create(dbClothe,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(`new clothes create : ${data}`);
        }
    })

}



module.exports.edit = (req,res)=>{
    var id = req.params.id;
    ProductModel.findById(id)
        .then(function(data){   
            console.log('data',data);
            console.log(typeof data);
            res.json(data)
        })
        .catch(function(err){
            console.log('error',err);
        });
}



module.exports.update = (req,res)=>{
    var id = req.params.id;
    const updatedClothe = req.body;
    ProductModel.update({_id:id},updatedClothe,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(`new clothes create : ${data}`);
        }
    });
}


module.exports.delete = (req,res)=>{
    var id = req.params.id;
    ProductModel.remove({_id:id},(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(`delete one product success : ${data}`);
        }
    });
}

