
module.exports = (sequelize, bcrypt, Sequelize) => {

	const Employee = sequelize.define("employee", {
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: Sequelize.INTEGER
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
			type: Sequelize.BIGINT(10)
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
		email: {
			type: Sequelize.STRING,
			isUnique: true,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		userName: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.STRING
		}
	},
	);

	module.exports = Employee;

	return Employee;
}; 