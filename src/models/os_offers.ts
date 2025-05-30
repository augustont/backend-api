import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { orders_of_service, orders_of_serviceId } from './orders_of_service';
import type { users, usersId } from './users';
import type { willy_requests, willy_requestsId } from './willy_requests';
import type { willys, willysId } from './willys';

export interface os_offersAttributes {
  id: number;
  willy_id?: number;
  orders_of_service_id?: number;
  distance_in_metters?: number;
  eta?: number;
  priority_result?: number;
  amount?: number;
  status?: string;
  created_at: Date;
  updated_at?: Date;
  cancel_expires_in?: Date;
  dispatch_expires_in?: Date;
  operator_id?: number;
  cancel_action?: string;
}

export type os_offersPk = "id";
export type os_offersId = os_offers[os_offersPk];
export type os_offersOptionalAttributes = "id" | "willy_id" | "orders_of_service_id" | "distance_in_metters" | "eta" | "priority_result" | "amount" | "status" | "created_at" | "updated_at" | "cancel_expires_in" | "dispatch_expires_in" | "operator_id" | "cancel_action";
export type os_offersCreationAttributes = Optional<os_offersAttributes, os_offersOptionalAttributes>;

export class os_offers extends Model<os_offersAttributes, os_offersCreationAttributes> implements os_offersAttributes {
  id!: number;
  willy_id?: number;
  orders_of_service_id?: number;
  distance_in_metters?: number;
  eta?: number;
  priority_result?: number;
  amount?: number;
  status?: string;
  created_at!: Date;
  updated_at?: Date;
  cancel_expires_in?: Date;
  dispatch_expires_in?: Date;
  operator_id?: number;
  cancel_action?: string;

  // os_offers belongsTo orders_of_service via orders_of_service_id
  orders_of_service!: orders_of_service;
  getOrders_of_service!: Sequelize.BelongsToGetAssociationMixin<orders_of_service>;
  setOrders_of_service!: Sequelize.BelongsToSetAssociationMixin<orders_of_service, orders_of_serviceId>;
  createOrders_of_service!: Sequelize.BelongsToCreateAssociationMixin<orders_of_service>;
  // os_offers hasMany willy_requests via offer_id
  willy_requests!: willy_requests[];
  getWilly_requests!: Sequelize.HasManyGetAssociationsMixin<willy_requests>;
  setWilly_requests!: Sequelize.HasManySetAssociationsMixin<willy_requests, willy_requestsId>;
  addWilly_request!: Sequelize.HasManyAddAssociationMixin<willy_requests, willy_requestsId>;
  addWilly_requests!: Sequelize.HasManyAddAssociationsMixin<willy_requests, willy_requestsId>;
  createWilly_request!: Sequelize.HasManyCreateAssociationMixin<willy_requests>;
  removeWilly_request!: Sequelize.HasManyRemoveAssociationMixin<willy_requests, willy_requestsId>;
  removeWilly_requests!: Sequelize.HasManyRemoveAssociationsMixin<willy_requests, willy_requestsId>;
  hasWilly_request!: Sequelize.HasManyHasAssociationMixin<willy_requests, willy_requestsId>;
  hasWilly_requests!: Sequelize.HasManyHasAssociationsMixin<willy_requests, willy_requestsId>;
  countWilly_requests!: Sequelize.HasManyCountAssociationsMixin;
  // os_offers belongsTo users via operator_id
  operator!: users;
  getOperator!: Sequelize.BelongsToGetAssociationMixin<users>;
  setOperator!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createOperator!: Sequelize.BelongsToCreateAssociationMixin<users>;
  // os_offers belongsTo willys via willy_id
  willy!: willys;
  getWilly!: Sequelize.BelongsToGetAssociationMixin<willys>;
  setWilly!: Sequelize.BelongsToSetAssociationMixin<willys, willysId>;
  createWilly!: Sequelize.BelongsToCreateAssociationMixin<willys>;

  static initModel(sequelize: Sequelize.Sequelize): typeof os_offers {
    return os_offers.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    willy_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'willys',
        key: 'id'
      }
    },
    orders_of_service_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders_of_service',
        key: 'id'
      }
    },
    distance_in_metters: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    priority_result: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cancel_expires_in: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dispatch_expires_in: {
      type: DataTypes.DATE,
      allowNull: true
    },
    operator_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    cancel_action: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'os_offers',
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
        name: "willy_id",
        using: "BTREE",
        fields: [
          { name: "willy_id" },
        ]
      },
      {
        name: "orders_of_service_id",
        using: "BTREE",
        fields: [
          { name: "orders_of_service_id" },
        ]
      },
      {
        name: "operator_id",
        using: "BTREE",
        fields: [
          { name: "operator_id" },
        ]
      },
    ]
  });
  }
}
