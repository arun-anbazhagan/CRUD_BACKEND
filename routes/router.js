var express = require('express');
var mongodb = require('mongodb');
var userController = require('../controller/userController');
var getUserinfo = require('../controller/getUserinfo');
var deletedata = require('../controller/deleteUser');
var updateUser = require('../controller/updateUser')
const router = express.Router();

router.post('/addUser',userController.addUser);
router.get('/read',getUserinfo.getUser);
router.delete('/deleteone/:id',deletedata.deleteUserdata)
router.put('/updateUser/:id',updateUser.updateData)
module.exports=router;


