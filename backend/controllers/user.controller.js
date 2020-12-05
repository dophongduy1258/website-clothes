var EmployeeModel = require('../models/user.model');

module.exports.listUser = (req,res)=>{
        
		EmployeeModel.find({})
            .then(function(data){   
                console.log('data',data);
                res.json(data)
            })
            .catch(function(err){
                console.log('error',err);
            })
    }

module.exports.add = (req,res)=>{

    const dbUser = req.body;
    EmployeeModel.create(dbUser,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(`new user create : ${data}`);
        }
    })

}



module.exports.edit = (req,res)=>{
    var id = req.params.id;
    EmployeeModel.findById(id)
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
    const updatedUser = req.body;
    EmployeeModel.update({_id:id},updatedUser,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(`new clothes create : ${data}`);
        }
    });
}


module.exports.delete = (req,res)=>{
    var id = req.params.id;
    EmployeeModel.remove({_id:id},(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(`delete one product success : ${data}`);
        }
    });
}

