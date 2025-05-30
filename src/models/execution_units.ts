import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { customers, customersId } from './customers';
import type { execution_unit_user, execution_unit_userId } from './execution_unit_user';
import type { orders_of_service, orders_of_serviceId } from './orders_of_service';
import type { users, usersId } from './users';

export interface execution_unitsAttributes {
  id: number;
  owner_id?: number;
  customer_id?: number;
  tag_id?: number;
  token?: string;
  name?: string;
  city?: string;
  region?: string;
  address?: string;
  geolocation?: string;
  powerbi_url?: string;
  createdAt: Date;
  updatedAt: Date;
  deleted_at?: Date;
  short_name?: string;
}

export type execution_unitsPk = "id";
export type execution_unitsId = execution_units[execution_unitsPk];
export type execution_unitsOptionalAttributes = "id" | "owner_id" | "customer_id" | "tag_id" | "token" | "name" | "city" | "region" | "address" | "geolocation" | "powerbi_url" | "createdAt" | "updatedAt" | "deleted_at" | "short_name";
export type execution_unitsCreationAttributes = Optional<execution_unitsAttributes, execution_unitsOptionalAttributes>;

export class execution_units extends Model<execution_unitsAttributes, execution_unitsCreationAttributes> implements execution_unitsAttributes {
  id!: number;
  owner_id?: number;
  customer_id?: number;
  tag_id?: number;
  token?: string;
  name?: string;
  city?: string;
  region?: string;
  address?: string;
  geolocation?: string;
  powerbi_url?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deleted_at?: Date;
  short_name?: string;

  // execution_units belongsTo customers via customer_id
  customer!: customers;
  getCustomer!: Sequelize.BelongsToGetAssociationMixin<customers>;
  setCustomer!: Sequelize.BelongsToSetAssociationMixin<customers, customersId>;
  createCustomer!: Sequelize.BelongsToCreateAssociationMixin<customers>;
  // execution_units hasMany execution_unit_user via execution_unit_id
  execution_unit_users!: execution_unit_user[];
  getExecution_unit_users!: Sequelize.HasManyGetAssociationsMixin<execution_unit_user>;
  setExecution_unit_users!: Sequelize.HasManySetAssociationsMixin<execution_unit_user, execution_unit_userId>;
  addExecution_unit_user!: Sequelize.HasManyAddAssociationMixin<execution_unit_user, execution_unit_userId>;
  addExecution_unit_users!: Sequelize.HasManyAddAssociationsMixin<execution_unit_user, execution_unit_userId>;
  createExecution_unit_user!: Sequelize.HasManyCreateAssociationMixin<execution_unit_user>;
  removeExecution_unit_user!: Sequelize.HasManyRemoveAssociationMixin<execution_unit_user, execution_unit_userId>;
  removeExecution_unit_users!: Sequelize.HasManyRemoveAssociationsMixin<execution_unit_user, execution_unit_userId>;
  hasExecution_unit_user!: Sequelize.HasManyHasAssociationMixin<execution_unit_user, execution_unit_userId>;
  hasExecution_unit_users!: Sequelize.HasManyHasAssociationsMixin<execution_unit_user, execution_unit_userId>;
  countExecution_unit_users!: Sequelize.HasManyCountAssociationsMixin;
  // execution_units hasMany orders_of_service via execution_unit_id
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
  // execution_units hasMany users via execution_unit_id
  users!: users[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<users>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<users, usersId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<users, usersId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<users, usersId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<users>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<users, usersId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<users, usersId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<users, usersId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<users, usersId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof execution_units {
    return execution_units.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    geolocation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    powerbi_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    short_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    }
  }, {
    sequelize,
    tableName: 'execution_units',
    timestamps: true,
    underscored: true,
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
        name: "clientId",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "tag_id",
        using: "BTREE",
        fields: [
          { name: "tag_id" },
        ]
      },
    ]
  });
  }
}
