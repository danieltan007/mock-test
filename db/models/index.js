"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const modelPath = process.cwd() + "/db/models/" || __dirname; //? panggil model path?
// ? basenya adalah index di folder models
const basename = path.basename(__dirname + "/../db/models/index.js");
// const basename = path.basename(__filename)
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

fs.readdirSync(modelPath)
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		);
	})
	.forEach((file) => {
		//? mungkin biar bisa baca modelnya dulu
		const model = require(__dirname + "/" + file)(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
