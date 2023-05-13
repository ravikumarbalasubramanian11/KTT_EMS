
module.exports = (sequelize,bcrypt, Sequelize) => {

    const EmployeeRole = sequelize.define("employeerole", {
      id:{ 
        primaryKey : true,
        autoIncrement : true,
        type  : Sequelize.INTEGER
          },
      role: {
        type: Sequelize.STRING
      },
      subRole: {
        type: Sequelize.STRING
      },
      isbool:{
        type: Sequelize.BOOLEAN
      }
    });

    module.exports = EmployeeRole;

    return EmployeeRole;
  }; 
