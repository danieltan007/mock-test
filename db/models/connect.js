import { Sequelize } from "sequelize";
require("dotenv").config();

const sequelize = new Sequelize(
	process.env.DB_DEV,
	process.env.DB_USERNAME_DEV,
	process.env.DB_PASSWORD_DEV,
	{
		host: "localhost",
		dialect: "postgres",
	}
);

export default sequelize;
