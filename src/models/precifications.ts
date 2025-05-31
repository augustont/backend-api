import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { orders_of_service, orders_of_serviceId } from './orders_of_service';
import type { willy_requests, willy_requestsId } from './willy_requests';
import type { willys, willysId } from './willys';

export interface precificationsAttributes {
  id: number;
  distance_meters?: number;
  duration_seconds?: number;
  total_wilys_online_radius?: number;
  total_order_service_radius?: number;
  probability_rain?: number;
  amount?: number;
  willy_id?: number;
  order_service_id?: number;
  forecast_amount?: number;
  willy_request_id?: number;
}

export type precificationsPk = "id";
export type precificationsId = precifications[precificationsPk];
export type precificationsOptionalAttributes = "id" | "distance_meters" | "duration_seconds" | "total_wilys_online_radius" | "total_order_service_radius" | "probability_rain" | "amount" | "willy_id" | "order_service_id" | "forecast_amount" | "willy_request_id";
export type precificationsCreationAttributes = Optional<precificationsAttributes, precificationsOptionalAttributes>;

export class precifications extends Model<precificationsAttributes, precificationsCreationAttributes> implements precificationsAttributes {
  id!: number;
  distance_meters?: number;
  duration_seconds?: number;
  total_wilys_online_radius?: number;
  total_order_service_radius?: number;
  probability_rain?: number;
  amount?: number;
  willy_id?: number;
  order_service_id?: number;
  forecast_amount?: number;
  willy_request_id?: number;

  // precifications belongsTo orders_of_service via order_service_id
  order_service!: orders_of_service;
  getOrder_service!: Sequelize.BelongsToGetAssociationMixin<orders_of_service>;
  setOrder_service!: Sequelize.BelongsToSetAssociationMixin<orders_of_service, orders_of_serviceId>;
  createOrder_service!: Sequelize.BelongsToCreateAssociationMixin<orders_of_service>;
  // precifications belongsTo willy_requests via willy_request_id
  willy_request!: willy_requests;
  getWilly_request!: Sequelize.BelongsToGetAssociationMixin<willy_requests>;
  setWilly_request!: Sequelize.BelongsToSetAssociationMixin<willy_requests, willy_requestsId>;
  createWilly_request!: Sequelize.BelongsToCreateAssociationMixin<willy_requests>;
  // precifications belongsTo willys via willy_id
  willy!: willys;
  getWilly!: Sequelize.BelongsToGetAssociationMixin<willys>;
  setWilly!: Sequelize.BelongsToSetAssociationMixin<willys, willysId>;
  createWilly!: Sequelize.BelongsToCreateAssociationMixin<willys>;

  static initModel(sequelize: Sequelize.Sequelize): typeof precifications {
    return precifications.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,

  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
        },
    distance_meters: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    duration_seconds: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    total_wilys_online_radius: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    total_order_service_radius: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    probability_rain: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    willy_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'willys',
        key: 'id',
      },
    },
    order_service_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders_of_service',
        key: 'id',
      },
    },
    forecast_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    willy_request_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'willy_requests',
        key: 'id',
      },
    },
  }, {
    sequelize,
    tableName: 'precifications',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ],
      },
      {
        name: "willy_id",
        using: "BTREE",
        fields: [
          { name: "willy_id" },
        ],
      },
      {
        name: "order_service_id",
        using: "BTREE",
        fields: [
          { name: "order_service_id" },
        ],
      },
      {
        name: "precifications_ibfk_3",
        using: "BTREE",
        fields: [
          { name: "willy_request_id" },
        ],
      },
    ],
  });
  }
}
