module.exports = app => {
    const logged = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", logged.create);

    router.get("/find", logged.findOne);

    router.get("/findAll", logged.findAll);
  
    app.use('/login/aspx', router);
  };