const { Sequelize } = require("sequelize");

const connect =
	process.env.NODE_ENV === "development"
		? new Sequelize(
				process.env.DB_DEV,
				process.env.DB_USERNAME_DEV,
				process.env.DB_PASSWORD_DEV,
				{
					host: "localhost",
					dialect: "postgres",
				},
		  )
		: new Sequelize(process.env.DATABASE_URL);

export default connect;
