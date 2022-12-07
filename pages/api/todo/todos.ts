import type { NextApiRequest, NextApiResponse } from "next";
import { initModels, users, usersAttributes } from "@db/models/init-models";
import sequelize from "@db/models/connect";

const todos = async (req: NextApiRequest, res: NextApiResponse) => {
	const { users, todos } = initModels(sequelize);
	const method = req.method;

	switch (method) {
		case "POST":
			try {
				const data = JSON.parse(req.body);
				console.log("🚀 ~ file: todos.ts:13 ~ todos ~ data", data);
				// const input = todos.create({
				//   name: data,
				//   user_id:
				// });
			} catch (err) {
				res.status(500).json({
					message: "Error while add todos : " + err.message,
				});
			}
	}
};

export default todos;
