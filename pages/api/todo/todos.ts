import type { NextApiRequest, NextApiResponse } from "next";
import { initModels, users, usersAttributes } from "@db/models/init-models";
import sequelize from "@db/models/connect";

const todos = async (req: NextApiRequest, res: NextApiResponse) => {
  const { users, } = initModels(sequelize);
  const method = req.method;

  switch (method) {
    case "POST":
      try {
        const todo = JSON.parse(req.body);
      } catch (err) {
        
      }
  }
}

export default todos;