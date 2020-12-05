require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT;
var apiRouter = require('./routers/api.route');
var mongoose = require('mongoose');
app.use(express.json());
app.use(cors());



mongoose.connect('mongodb://localhost/clothe-db', {useNewUrlParser: true});
mongoose.connection.on('connected',()=>{
    console.log('MongoDB database connection successfully!!!');
});


// app.post("/add",(req,res)=>{
//     const dbClothe = req.body;
//     console.log(dbClothe);
//     ProductModel.create(dbClothe,(err,data)=>{
//         if(err){
//             res.status(500).send(err);
//         }else{
//             res.status(201).send(`new clothes create : ${data}`);
//         }
//     })

// })

app.use('/api',apiRouter);


app.listen(port,()=>{
    console.log(`Connect server // : ${port} successful !!!`);
}).on('error',(error)=>{
    console.log(`Server is disconnected : ${error}`);
});