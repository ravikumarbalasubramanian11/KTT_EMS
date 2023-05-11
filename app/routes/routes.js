module.exports = app => {
    const logged = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", logged.create);

    router.post("/create", logged.create1);

    router.get("/find", logged.findOne);

    router.get("/find/:id", logged.findOneId);
 
    router.get("/findAll", logged.findAll);

    router.put("/:id", logged.update);

    router.delete("/delete/:id", logged.delete);

    router.get("/count", logged.count);
  
    app.use('/login', router);
  };