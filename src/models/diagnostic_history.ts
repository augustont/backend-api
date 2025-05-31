import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { orders_of_service, orders_of_serviceId } from './orders_of_service';
import type { users, usersId } from './users';

export interface diagnostic_historyAttributes {
  id: number;
  user_id?: number;
  order_id?: number;
  was_performed?: number;
  description?: string;
  created_at?: Date;
}

export type diagnostic_historyPk = "id";
export type diagnostic_historyId = diagnostic_history[diagnostic_historyPk];
export type diagnostic_historyOptionalAttributes = "id" | "user_id" | "order_id" | "was_performed" | "description" | "created_at";
export type diagnostic_historyCreationAttributes = Optional<diagnostic_historyAttributes, diagnostic_historyOptionalAttributes>;

export class diagnostic_history extends Model<diagnostic_historyAttributes, diagnostic_historyCreationAttributes> implements diagnostic_historyAttributes {
  id!: number;
  user_id?: number;
  order_id?: number;
  was_performed?: number;
  description?: string;
  created_at?: Date;

  // diagnostic_history belongsTo orders_of_service via order_id
  order!: orders_of_service;
  getOrder!: Sequelize.BelongsToGetAssociationMixin<orders_of_service>;
  setOrder!: Sequelize.BelongsToSetAssociationMixin<orders_of_service, orders_of_serviceId>;
  createOrder!: Sequelize.BelongsToCreateAssociationMixin<orders_of_service>;
  // diagnostic_history belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof diagnostic_history {
    return diagnostic_history.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true

  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
        },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders_of_service',
        key: 'id'
      }
    },
    was_performed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'diagnostic_history',
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
      {
        name: "order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
  }
}
