import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { orders_of_service, orders_of_serviceId } from './orders_of_service';
import type { users, usersId } from './users';

export interface geolocation_historyAttributes {
  id: number;
  user_id?: number;
  order_id?: number;
  latitude?: string;
  longitude?: string;
  created_at?: Date;
}

export type geolocation_historyPk = "id";
export type geolocation_historyId = geolocation_history[geolocation_historyPk];
export type geolocation_historyOptionalAttributes = "id" | "user_id" | "order_id" | "latitude" | "longitude" | "created_at";
export type geolocation_historyCreationAttributes = Optional<geolocation_historyAttributes, geolocation_historyOptionalAttributes>;

export class geolocation_history extends Model<geolocation_historyAttributes, geolocation_historyCreationAttributes> implements geolocation_historyAttributes {
  id!: number;
  user_id?: number;
  order_id?: number;
  latitude?: string;
  longitude?: string;
  created_at?: Date;

  // geolocation_history belongsTo orders_of_service via order_id
  order!: orders_of_service;
  getOrder!: Sequelize.BelongsToGetAssociationMixin<orders_of_service>;
  setOrder!: Sequelize.BelongsToSetAssociationMixin<orders_of_service, orders_of_serviceId>;
  createOrder!: Sequelize.BelongsToCreateAssociationMixin<orders_of_service>;
  // geolocation_history belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof geolocation_history {
    return geolocation_history.init({
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders_of_service',
        key: 'id',
      }
    },
    latitude: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    longitude: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    sequelize,
    tableName: 'geolocation_history',
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
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ],
      },
      {
        name: "order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ],
      },
    ],
  });
  }
}
