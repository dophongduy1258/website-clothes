var express = require('express');
var router = express.Router();
var controllerProduct = require('../controllers/product.controller');
var controllerUser = require('../controllers/user.controller');

// product
router.get('/Product',controllerProduct.listProduct);
router.post('/addProduct',controllerProduct.add);
router.get('/editProduct/:id',controllerProduct.edit);
router.put('/updateProduct/:id',controllerProduct.update);
router.delete('/deleteProduct/:id',controllerProduct.delete);

//user
router.get('/user',controllerUser.listUser);
router.post('/addUser',controllerUser.add);
router.get('/editUser/:id',controllerUser.edit);
router.put('/updateUser/:id',controllerUser.update);
router.delete('/deleteUser/:id',controllerUser.delete);




module.exports = router;