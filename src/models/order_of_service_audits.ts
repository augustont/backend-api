import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { orders_of_service, orders_of_serviceId } from './orders_of_service';
import type { users, usersId } from './users';

export interface order_of_service_auditsAttributes {
  id: number;
  user_id?: number;
  order_id?: number;
  attributes?: object;
}

export type order_of_service_auditsPk = "id";
export type order_of_service_auditsId = order_of_service_audits[order_of_service_auditsPk];
export type order_of_service_auditsOptionalAttributes = "id" | "user_id" | "order_id" | "attributes";
export type order_of_service_auditsCreationAttributes = Optional<order_of_service_auditsAttributes, order_of_service_auditsOptionalAttributes>;

export class order_of_service_audits extends Model<order_of_service_auditsAttributes, order_of_service_auditsCreationAttributes> implements order_of_service_auditsAttributes {
  id!: number;
  user_id?: number;
  order_id?: number;
  attributes?: object;

  // order_of_service_audits belongsTo orders_of_service via order_id
  order!: orders_of_service;
  getOrder!: Sequelize.BelongsToGetAssociationMixin<orders_of_service>;
  setOrder!: Sequelize.BelongsToSetAssociationMixin<orders_of_service, orders_of_serviceId>;
  createOrder!: Sequelize.BelongsToCreateAssociationMixin<orders_of_service>;
  // order_of_service_audits belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof order_of_service_audits {
    return order_of_service_audits.init({
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
    attributes: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_of_service_audits',
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
