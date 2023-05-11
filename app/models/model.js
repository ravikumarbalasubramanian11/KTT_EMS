
module.exports = (sequelize,bcrypt, Sequelize) => {

    const Employee = sequelize.define("employee", {
      id:{ 
        primaryKey : true,
        autoIncrement : true,
        type  : Sequelize.INTEGER
          },
      fullName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      bloodGroup: {
        type: Sequelize.STRING
      },
      contactNumber: {
        type: Sequelize.INTEGER
      },
      dateOfJoining: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      pastExperiance: {
        type: Sequelize.STRING
      },
      email:{
        type : Sequelize.STRING,
        isUnique :true,
        allowNull:false,
        validate:{
            isEmail : true
        }
      },
      userName: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }},
      {
        hooks: {
          beforeCreate: async (employee) => {
            const salt = await bcrypt.genSaltSync(10);
            employee.password = await bcrypt.hashSync(employee.password, salt);
          },
          beforeUpdate: async (employee) => {
            if (employee.changed('password')) {
              const salt = await bcrypt.genSaltSync(10);
              employee.password = await bcrypt.hashSync(employee.password, salt);
            }
          
        }
      }
    });

    module.exports = Employee;

    return Employee;
  }; 