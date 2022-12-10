const { Sequelize } = require("sequelize");

let connect = "";

if (process.env.NODE_ENV === "development") {
	connect = new Sequelize(
		process.env.DB_DEV,
		process.env.DB_USERNAME_DEV,
		process.env.DB_PASSWORD_DEV,
		{
			host: "localhost",
			dialect: "postgres",
		},
	);
} else {
	connect = new Sequelize(process.env.DATABASE_URL);
}

export default connect;
