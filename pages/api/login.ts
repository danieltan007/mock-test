import type { NextApiRequest, NextApiResponse } from "next";
import { initModels, users, usersAttributes } from "@db/models/init-models";
import sequelize from "@db/models/connect";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
	const { users } = initModels(sequelize);
	const id = req.body.id;

	try {
		const cekUser = users.findOne({ where: { id: id } });
		if (!cekUser) {
			return res.status(404).json({
				message: "wrong id, please try again!",
			});
		}

		return res.status(200).json({
			message: "succesfully login!",
		});
	} catch (err: any) {
		return res.status(500).json({
			message: "error while login : " + err.message,
		});
	}
};

export default login;
