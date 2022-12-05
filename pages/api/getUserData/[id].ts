import type { NextApiRequest, NextApiResponse } from "next";

import {
	initModels,
	users,
	usersAttributes,
	todos,
} from "@db/models/init-models";
import sequelize from "@db/models/connect";

const getUserData = async (req: NextApiRequest, res: NextApiResponse) => {
	const id = req.query.id;
	const { users, todos } = initModels(sequelize);
	const getUser = await users.findOne({ where: { id: id } });
	if (!getUser) {
		return res.status(404).json({
			message: "user not found!",
		});
	}

	const getData = await todos.findAll({
		where: {
			user_id: id,
		},
	});

	if (!getData) {
		return res.status(404).json({
			message: "no todos",
		});
	}

	return res.status(200).json({
		message: "succesfully get data",
		data: getData,
	});
};

export default getUserData;
