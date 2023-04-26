

module.exports = (sequelize,bcrypt, Sequelize) => {

    const Login = sequelize.define("login", {
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
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }},
      {
        hooks: {
          beforeCreate: async (login) => {
            const salt = await bcrypt.genSaltSync(10);
            login.password = await bcrypt.hashSync(login.password, salt);
          },
          beforeUpdate: async (login) => {
            if (login.changed('password')) {
              const salt = await bcrypt.genSaltSync(10);
              login.password = await bcrypt.hashSync(login.password, salt);
            }
          
        }
      }
    });

    module.exports = Login;

    return Login;
  }; 