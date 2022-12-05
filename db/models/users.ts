import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { todos, todosId } from "./todos";

export interface usersAttributes {
	id: number;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersCreationAttributes = usersAttributes;

export class users
	extends Model<usersAttributes, usersCreationAttributes>
	implements usersAttributes
{
	id!: number;

	// users hasMany todos via user_id
	todos!: todos[];
	getTodos!: Sequelize.HasManyGetAssociationsMixin<todos>;
	setTodos!: Sequelize.HasManySetAssociationsMixin<todos, todosId>;
	addTodo!: Sequelize.HasManyAddAssociationMixin<todos, todosId>;
	addTodos!: Sequelize.HasManyAddAssociationsMixin<todos, todosId>;
	createTodo!: Sequelize.HasManyCreateAssociationMixin<todos>;
	removeTodo!: Sequelize.HasManyRemoveAssociationMixin<todos, todosId>;
	removeTodos!: Sequelize.HasManyRemoveAssociationsMixin<todos, todosId>;
	hasTodo!: Sequelize.HasManyHasAssociationMixin<todos, todosId>;
	hasTodos!: Sequelize.HasManyHasAssociationsMixin<todos, todosId>;
	countTodos!: Sequelize.HasManyCountAssociationsMixin;

	static initModel(sequelize: Sequelize.Sequelize): typeof users {
		return users.init(
			{
				id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
					validate: {
						len: [4, 5],
						notEmpty: true,
						notNull: true,
					},
				},
			},
			{
				sequelize,
				tableName: "users",
				schema: "public",
				timestamps: false,
				indexes: [
					{
						name: "users_pkey",
						unique: true,
						fields: [{ name: "id" }],
					},
				],
			}
		);
	}
}
