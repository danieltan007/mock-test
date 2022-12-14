require("dotenv").config();

module.exports = {
	development: {
		username: process.env.DB_USERNAME_DEV || "postgres",
		password: process.env.DB_PASSWORD_DEV || "123456",
		database: process.env.DB_DEV || "database_development",
		host: "127.0.0.1",
		dialect: "postgres",
	},
	production: {
		username: process.env.DB_USERNAME_PROD || "postgres",
		password: process.env.PGPASSWORD || "123456",
		database: process.env.PGDATABASE || "database_production",
		host: process.env.PGHOST,
		dialect: "postgres",
	},
};
