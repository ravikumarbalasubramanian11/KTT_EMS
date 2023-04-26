const db = require("../models");
const Login = db.login;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  const login ={
    fullName: req.body.fullName,
    lastName: req.body.lastName,
    age: req.body.age,
    bloodGroup: req.body.bloodGroup,
    contactNumber: req.body.contactNumber,
    dateOfJoining: req.body.dateOfJoining,
    address: req.body.address,
    department: req.body.department,
    pastExperiance: req.body.pastExperiance,
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email
  }


Login.create(login)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
  };


  exports.findOne = (req, res) => {
    const user_name = req.body.user_name;
    const password = req.body.password;
    console.log("error"+user_name)
    console.log("error"+password)
    if (!req.body.user_name || !req.body.password) {
      res.status(400).send({
        message: "Both user_name and password are required fields."
      });
      return;
    }

    Login.findOne({ where: { 
      user_name: user_name,
      password:password

    }})
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: "Login not found."
          });
          return;
        }
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving login."
        });
      });
  };

  exports.findAll = (req, res) => {

    Login.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving login."
        });
      });
  };
  