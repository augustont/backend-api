import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { execution_units, execution_unitsId } from './execution_units';
import type { users, usersId } from './users';

export interface execution_unit_userAttributes {
  id: number;
  execution_unit_id?: number;
  user_id?: number;
  created_at: Date;
  updated_at?: Date;
}

export type execution_unit_userPk = "id";
export type execution_unit_userId = execution_unit_user[execution_unit_userPk];
export type execution_unit_userOptionalAttributes = "id" | "execution_unit_id" | "user_id" | "created_at" | "updated_at";
export type execution_unit_userCreationAttributes = Optional<execution_unit_userAttributes, execution_unit_userOptionalAttributes>;

export class execution_unit_user extends Model<execution_unit_userAttributes, execution_unit_userCreationAttributes> implements execution_unit_userAttributes {
  id!: number;
  execution_unit_id?: number;
  user_id?: number;
  created_at!: Date;
  updated_at?: Date;

  // execution_unit_user belongsTo execution_units via execution_unit_id
  execution_unit!: execution_units;
  getExecution_unit!: Sequelize.BelongsToGetAssociationMixin<execution_units>;
  setExecution_unit!: Sequelize.BelongsToSetAssociationMixin<execution_units, execution_unitsId>;
  createExecution_unit!: Sequelize.BelongsToCreateAssociationMixin<execution_units>;
  // execution_unit_user belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof execution_unit_user {
    return execution_unit_user.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    execution_unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'execution_units',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'execution_unit_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "execution_unit_id",
        using: "BTREE",
        fields: [
          { name: "execution_unit_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
