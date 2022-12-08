const { Sequelize } = require("sequelize");

const connect = new Sequelize(
	// process.env.DB_DEV,
	// process.env.DB_USERNAME_DEV,
	// process.env.DB_PASSWORD_DEV,
	// {
	// 	host: "localhost",
	// 	dialect: "postgres",
	// }
	process.env.DATABASE_URL
);

export default connect;
