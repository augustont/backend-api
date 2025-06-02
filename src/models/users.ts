import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { execution_units, execution_unitsId } from './execution_units';
import type { orders_of_service, orders_of_serviceId } from './orders_of_service';
import type { willy_requests, willy_requestsId } from './willy_requests';

export interface usersAttributes {
  id: number;
  customer_id?: number;
  execution_unit_id?: number;
  name?: string;
  email?: string;
  password?: string;
  deleted_at?: Date;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "id" | "customer_id" | "execution_unit_id" | "name" | "email" | "password" | "deleted_at";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  id!: number;
  customer_id?: number;
  execution_unit_id?: number;
  name?: string;
  email?: string;
  password?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;

  // users belongsTo execution_units via execution_unit_id
  execution_unit!: execution_units;
  getExecution_unit!: Sequelize.BelongsToGetAssociationMixin<execution_units>;
  setExecution_unit!: Sequelize.BelongsToSetAssociationMixin<execution_units, execution_unitsId>;
  createExecution_unit!: Sequelize.BelongsToCreateAssociationMixin<execution_units>;
  // users hasMany orders_of_service via canceled_by_user_id
  orders_of_services!: orders_of_service[];
  getOrders_of_services!: Sequelize.HasManyGetAssociationsMixin<orders_of_service>;
  setOrders_of_services!: Sequelize.HasManySetAssociationsMixin<orders_of_service, orders_of_serviceId>;
  addOrders_of_service!: Sequelize.HasManyAddAssociationMixin<orders_of_service, orders_of_serviceId>;
  addOrders_of_services!: Sequelize.HasManyAddAssociationsMixin<orders_of_service, orders_of_serviceId>;
  createOrders_of_service!: Sequelize.HasManyCreateAssociationMixin<orders_of_service>;
  removeOrders_of_service!: Sequelize.HasManyRemoveAssociationMixin<orders_of_service, orders_of_serviceId>;
  removeOrders_of_services!: Sequelize.HasManyRemoveAssociationsMixin<orders_of_service, orders_of_serviceId>;
  hasOrders_of_service!: Sequelize.HasManyHasAssociationMixin<orders_of_service, orders_of_serviceId>;
  hasOrders_of_services!: Sequelize.HasManyHasAssociationsMixin<orders_of_service, orders_of_serviceId>;
  countOrders_of_services!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany willy_requests via operator_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    return users.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    execution_unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'execution_units',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(765),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(765),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(765),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    paranoid: true,
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
    ]
  });
  }
}
