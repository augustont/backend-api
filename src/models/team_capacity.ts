import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { users, usersId } from './users';

export interface team_capacityAttributes {
  id: number;
  user_id?: number;
  total_capacity?: number;
  online?: number;
  created_at: Date;
  updated_at?: Date;
}

export type team_capacityPk = "id";
export type team_capacityId = team_capacity[team_capacityPk];
export type team_capacityOptionalAttributes = "id" | "user_id" | "total_capacity" | "online" | "created_at" | "updated_at";
export type team_capacityCreationAttributes = Optional<team_capacityAttributes, team_capacityOptionalAttributes>;

export class team_capacity extends Model<team_capacityAttributes, team_capacityCreationAttributes> implements team_capacityAttributes {
  id!: number;
  user_id?: number;
  total_capacity?: number;
  online?: number;
  created_at!: Date;
  updated_at?: Date;

  // team_capacity belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof team_capacity {
    return team_capacity.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    total_capacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    online: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'team_capacity',
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
