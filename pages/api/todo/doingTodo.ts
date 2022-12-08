import type { NextApiRequest, NextApiResponse } from "next";
import { initModels, users, usersAttributes } from "@db/models/init-models";
import sequelize from "@db/models/connect";

const doingTodo = async (req: NextApiRequest, res: NextApiResponse) => {
	const { users, todos } = initModels(sequelize);
	const method = req.method;

	if (method === "POST") {
		try {
			const { todoId } = JSON.parse(req.body);
			const data = await todos.findOne({ where: { id: todoId } });
			if (data.status === "active") {
				data.status = "running";
			} else {
				data.status = "finished";
			}

			await todos.update({ status: data.status }, { where: { id: todoId } });

			res.status(200).json({
				message: "doing todo success",
			});
		} catch (err) {
			res.status(500).json({
				message: "error doing todo : " + err.message,
			});
		}
	} else {
		res.status(401).json({
			message: "not supported yet",
		});
	}
};

export default doingTodo;
