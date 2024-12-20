var mongoose= require ("mongoose");
var Data =require ('../models/userModel');

exports.updateData = (req, res) => {
    console.log('sdafsf',req.params.id);
    console.log('sdafsf',req.body);
  Data.findByIdAndUpdate(req.params.id, req.body,{new:true})
      .then(data => {
        res.status(200).json({data:data , message:"this data is updated"})
      }).catch(err => {
        res.status(500).json({
          message: { msgBody: 'An error has occurred whilst creating a new Data.', msgError: true, err },
        })
      })
  }
  