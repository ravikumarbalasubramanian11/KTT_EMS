const { response } = require("express");
const db = require("../models");
const Employee = db.employee;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
  const fullname = req.body.fullName;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const bloodGroup = req.body.bloodGroup;
  const contactNumber = req.body.contactNumber;
  const dateOfJoining = req.body.dateOfJoining;
  const address = req.body.address;
  const department = req.body.department;
  const pastExperiance = req.body.pastExperiance;
  const userName = req.body.userName;
  const password = req.body.password;
  const email = req.body.email;

  const employ = {
    fullName: fullname,
    lastName: lastName,
    age: age,
    bloodGroup: bloodGroup,
    contactNumber: contactNumber,
    dateOfJoining: dateOfJoining,
    address: address,
    department: department,
    pastExperiance: pastExperiance,
    userName: userName,
    password: password,
    email: email
  };

  console.log(employ);

  if (
    fullname === "" ||
    lastName === "" ||
    age === "" ||
    bloodGroup === "" ||
    contactNumber === "" ||
    dateOfJoining === "" ||
    address === "" ||
    department === "" ||
    pastExperiance === "" ||
    userName === "" ||
    password === "" ||
    email === ""
  ) {
    res.status(400).json({ error: "Required all Input Fields" });
    console.log("Required all Input Fields");
    return;
  }

  Employee.create(employ)
    .then((data) => {
      if (data) {
        res.status(200).json({ success: "Employee Successfully Created" });
        console.log("Employee Successfully Created");
        return;
      }
    })
    .catch((err) => {
      if (err) {
        res.status(500).json({ errorMessage: "Error While Creating Employee" });
        console.log("Error While Creating Employee");
        return;
      }
    });
};




exports.create1 = (req, res) => {
  const employ ={
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
    Employee.create(employ)
      .then(data => {
        console.log(msg)
      })
      .catch(err => {
        console.log(err)
      });
    };

exports.findOne = (req, res) => {
      const userName = req.query.userName;
      const password = req.query.password;
      console.log("error :" + userName);
      console.log("error :" + password);
      if (!req.query.userName || !req.query.password) {
        res.render('login', {
          errorMessage: "Both userName and password are required fields."
        });
        return;
      }
    
      Employee.findOne({
        where: {
          userName: userName,
        },
      })
        .then(async (employee) => {
          if (!employee) {
            res.render('login', {
              errorMessage: "Employee not found."
            });
            return;
          }
    
          const isPasswordValid = await bcrypt.compare(
            password,
            employee.password
          );
    
          if (!isPasswordValid) {
            res.render('login', {
              errorMessage: "Invalid password."
            });
            return;
          }
    
          // Set session variables
          req.session.isAuthenticated = true;
          req.session.userName = employee.userName;
          console.log("Request "+req.session.userName)
    
          // Redirect to the dashboard page
          res.redirect("/dashboard");
        })
        .catch(err => {
          res.render('login', {
            errorMessage: err.message || 'An error occurred'
          });
        });
    };
    
  exports.findOneId = (req, res) => {
    const id = req.params.id;
    Employee.findOne({
      where: { id },
    })
      .then(data => {
        if (!data) {
          res.status(404).json({ errorMessage: "Employee Not Found" });
        } else {
          res.status(200).json({ successMessage: "Employee Found", employee: data });
        }
      })
      .catch(err => {
        res.status(500).json({ errorMessage: err.message });
      });
  };
  
  exports.findAll = (req, res) => {

    Employee.findAll()
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
  
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Employee.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Employee was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`
          });
        }

      })
      exports.delete = (req, res) => {
        const id = req.params.id;
      
        Employee.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.status(200).json({
                message: "Employee was deleted successfully!"
              });
            } else {
              res.status(404).json({
                message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete Employee with id=" + id,
              error: err
            });
          });
          
      };
      
      
  };

  exports.count = (req, res) => {

  Employee.count().then(count => {
    console.log(`There are ${count} users`);
    res.send({count})
  }).catch(err => {
    console.error('Error counting users', err);
  });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Employee.update({
    fullName: req.body.fullName,
    lastName: req.body.lastName,
    age: req.body.age,
    bloodGroup: req.body.bloodGroup,
    contactNumber: req.body.contactNumber,
    dateOfJoining: req.body.dateOfJoining,
    address: req.body.address,
    department: req.body.department,
    pastExperiance: req.body.pastExperiance,
    email: req.body.email,
  }, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).json({
          successMessage: "Employee was updated successfully."
        });
      } else {
        res.status(404).json({
          errorMessage: `Cannot update Employee with id=${id}. Maybe Employee was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Employee with id=" + id
      });
    });
};