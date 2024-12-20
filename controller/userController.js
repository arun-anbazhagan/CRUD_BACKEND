var mongoose = require("mongoose");
var Data = require("../models/userModel");
exports.addUser = (req, res) => {
  const { firstname, lastname, age, college, university, address } = req.body;
  const newData = new Data({
    firstname,
    lastname,
    age,
    college,
    university,
    address,
  });
  newData
    .save()
    .then((data) => {
      res.status(200).json({
        message: "A Data was successfully created",
        //created_data: { _id: data._id, data: data.data },
      });
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