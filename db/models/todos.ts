// @ts-nocheck
import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { users, usersId } from "./users";

export interface todosAttributes {
	id: number;
	name?: string;
	user_id?: number;
}

export type todosPk = "id";
export type todosId = todos[todosPk];
export type todosOptionalAttributes = "name" | "user_id";
export type todosCreationAttributes = Optional<
	todosAttributes,
	todosOptionalAttributes
>;

export class todos
	extends Model<todosAttributes, todosCreationAttributes>
	implements todosAttributes
{
	id!: number;
	name?: string;
	user_id?: number;

	// todos belongsTo users via user_id
	user!: users;
	getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
	setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
	createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

	static initModel(sequelize: Sequelize.Sequelize): typeof todos {
		return todos.init(
			{
				id: {
					autoIncrement: true,
					autoIncrementIdentity: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				name: {
					type: DataTypes.STRING(100),
					allowNull: false,
				},
				status: {
					type: DataTypes.STRING(10),
					allowNull: false,
				},
				user_id: {
					type: DataTypes.INTEGER,
					allowNull: true,
					references: {
						model: "users",
						key: "id",
					},
				},
			},
			{
				sequelize,
				tableName: "todos",
				schema: "public",
				timestamps: false,
				indexes: [
					{
						name: "todos_pkey",
						unique: true,
						fields: [{ name: "id" }],
					},
				],
			}
		);
	}
}
