import type { NextApiRequest, NextApiResponse } from "next";
import { initModels, users, usersAttributes } from "@db/models/init-models";
import sequelize from "@db/models/connect";

const todos = async (req: NextApiRequest, res: NextApiResponse) => {
	const { users, todos } = initModels(sequelize);
	const method = req.method;

	switch (method) {
		case "POST":
			try {
				const { todo, id } = req.body;
				const input = await todos.create({
					name: todo,
					user_id: parseInt(id),
					status: "active",
				});

				if (input) {
					return res.status(200).json({
						message: "data succesfully inputed",
					});
				} else {
					return res.status(400).json({
						message: "data failed to input",
					});
				}
			} catch (err) {
				res.status(500).json({
					message: "Error while add todos : " + err.message,
				});
			}
		case "PUT":
			try {
				const { todo, todoId } = JSON.parse(req.body);
				await todos.update({ name: todo }, { where: { id: todoId } });
				return res.status(200).json({
					message: "data succesfully updated",
				});
			} catch (err) {
				res.status(500).json({
					message: "data failed to update : " + err.message,
				});
			}
		case "DELETE":
			try {
				const { todoId } = JSON.parse(req.body);

				await todos.destroy({ where: { id: todoId } });
				res.status(200).json({
					message: "data succesfully deleted",
				});
			} catch (err) {
				res.status(500).json({
					message: "data failed to delete : " + err.message,
				});
			}
		case "GET":
			res.status(401).json({
				message: "not supproted yet",
			});
	}
};

export default todos;
