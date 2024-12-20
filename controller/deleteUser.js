var mongoose = require('mongoose');
var Data = require('../models/userModel');

exports.deleteUserdata = (req, res) => {
  console.log("gfadshafdshgfdsh",req.params.id);
    Data.deleteOne({_id:req.params.id})
        .then(data => {
          res.status(200).json({data:data , message:"this data is deleted"})
        }).catch(err => {
          res.status(500).json({
            message: { msgBody: 'An error has occurred whilst creating a new Data.', msgError: true, err },
          })
        })
    }