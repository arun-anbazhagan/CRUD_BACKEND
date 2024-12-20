var mongoose = require("mongoose");
var Data = require("../models/userModel");
exports.getUser = (req, res) => {
  Data
    .find()
    .then((data) => {
      res.status(200).json({data:data});
    })
    .catch((err) => {
      res.status(500).json({
        message: {
          msgBody: "An error has occurred whilst creating a new Data.",
          msgError: true,
          err,
        },
      });
    });
};