module.exports = app => {
    const logged = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", logged.create);

    router.post("/create", logged.create1);

    router.post('/findOneUserName',logged.findOneUserName)

    router.get("/find", logged.findOne);

    router.get("/find/:id", logged.findOneId);
 
    router.get("/findAll", logged.findAll);

    router.get("/findAllEmp", logged.findAllEmp);

    router.put("/:id", logged.update);

    router.delete("/delete/:id", logged.delete);

    router.get("/count", logged.count);

    router.get("/findSales", logged.findSales);

    router.get("/findMarketing", logged.findMarketing);
  
    router.get("/findEngineering", logged.findEngineering);

    router.get("/findFinance", logged.findFinance);

    router.post("/userRole", logged.userRole);
    
    app.use('/login', router);
  };