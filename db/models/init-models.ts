import type { Sequelize } from "sequelize";
import { todos as _todos } from "./todos";
import type { todosAttributes, todosCreationAttributes } from "./todos";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  _todos as todos,
  _users as users,
};

export type {
  todosAttributes,
  todosCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const todos = _todos.initModel(sequelize);
  const users = _users.initModel(sequelize);

  todos.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(todos, { as: "todos", foreignKey: "user_id"});

  return {
    todos: todos,
    users: users,
  };
}
