import type { NextApiRequest, NextApiResponse } from "next";

import {
	initModels,
	users,
	usersAttributes,
	todos,
} from "@db/models/init-models";
import sequelize from "@db/models/connect";

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
	const { users, todos } = initModels(sequelize);
	const cekData = await users.findAll({
		include: [
			{
				model: todos,
				as: "todos",
			},
		],
	});

	if (!cekData) {
		return res.status(404).json({
			message: "no data",
		});
	}

	return res.status(200).json({
		message: "sucessfully get users",
		data: cekData,
	});
};

export default getUser;
