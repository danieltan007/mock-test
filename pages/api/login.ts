import type { NextApiRequest, NextApiResponse } from "next";
import { initModels, users, usersAttributes } from "@db/models/init-models";
import sequelize from "@db/models/connect";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
	const { users } = initModels(sequelize);
	const method = req.method;

	if (method === "POST") {
		try {
			const id = JSON.parse(req.body);

			const cekUser = users.findOne({ where: { id: id } });

			if (!cekUser) {
				return res.status(404).json({
					message: "wrong id, please try again!",
				});
			} else {
				return res.status(200).json({
					message: "succesfully login!",
				});
			}
		} catch (err: any) {
			return res.status(500).json({
				message: "error while login : " + err.message,
			});
		}
	} else {
		return res.status(401).json({
			message: "not supported yet",
		});
	}
};

export default login;
