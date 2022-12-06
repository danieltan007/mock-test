const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
	process.env.DB_DEV,
	process.env.DB_USERNAME_DEV,
	process.env.DB_PASSWORD_DEV,
	{
		host: "localhost",
		dialect:
			"postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
	}
);

const test = async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

test();
