import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { diagnostic_history, diagnostic_historyId } from './diagnostic_history';
import type { execution_unit_user, execution_unit_userId } from './execution_unit_user';
import type { execution_units, execution_unitsId } from './execution_units';
import type { geolocation_history, geolocation_historyId } from './geolocation_history';
import type { order_of_service_audits, order_of_service_auditsId } from './order_of_service_audits';
import type { orders_of_service, orders_of_serviceId } from './orders_of_service';
import type { os_offers, os_offersId } from './os_offers';
import type { team_capacity, team_capacityId } from './team_capacity';
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
  // users hasMany diagnostic_history via user_id
  diagnostic_histories!: diagnostic_history[];
  getDiagnostic_histories!: Sequelize.HasManyGetAssociationsMixin<diagnostic_history>;
  setDiagnostic_histories!: Sequelize.HasManySetAssociationsMixin<diagnostic_history, diagnostic_historyId>;
  addDiagnostic_history!: Sequelize.HasManyAddAssociationMixin<diagnostic_history, diagnostic_historyId>;
  addDiagnostic_histories!: Sequelize.HasManyAddAssociationsMixin<diagnostic_history, diagnostic_historyId>;
  createDiagnostic_history!: Sequelize.HasManyCreateAssociationMixin<diagnostic_history>;
  removeDiagnostic_history!: Sequelize.HasManyRemoveAssociationMixin<diagnostic_history, diagnostic_historyId>;
  removeDiagnostic_histories!: Sequelize.HasManyRemoveAssociationsMixin<diagnostic_history, diagnostic_historyId>;
  hasDiagnostic_history!: Sequelize.HasManyHasAssociationMixin<diagnostic_history, diagnostic_historyId>;
  hasDiagnostic_histories!: Sequelize.HasManyHasAssociationsMixin<diagnostic_history, diagnostic_historyId>;
  countDiagnostic_histories!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany execution_unit_user via user_id
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
  // users hasMany geolocation_history via user_id
  geolocation_histories!: geolocation_history[];
  getGeolocation_histories!: Sequelize.HasManyGetAssociationsMixin<geolocation_history>;
  setGeolocation_histories!: Sequelize.HasManySetAssociationsMixin<geolocation_history, geolocation_historyId>;
  addGeolocation_history!: Sequelize.HasManyAddAssociationMixin<geolocation_history, geolocation_historyId>;
  addGeolocation_histories!: Sequelize.HasManyAddAssociationsMixin<geolocation_history, geolocation_historyId>;
  createGeolocation_history!: Sequelize.HasManyCreateAssociationMixin<geolocation_history>;
  removeGeolocation_history!: Sequelize.HasManyRemoveAssociationMixin<geolocation_history, geolocation_historyId>;
  removeGeolocation_histories!: Sequelize.HasManyRemoveAssociationsMixin<geolocation_history, geolocation_historyId>;
  hasGeolocation_history!: Sequelize.HasManyHasAssociationMixin<geolocation_history, geolocation_historyId>;
  hasGeolocation_histories!: Sequelize.HasManyHasAssociationsMixin<geolocation_history, geolocation_historyId>;
  countGeolocation_histories!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany order_of_service_audits via user_id
  order_of_service_audits!: order_of_service_audits[];
  getOrder_of_service_audits!: Sequelize.HasManyGetAssociationsMixin<order_of_service_audits>;
  setOrder_of_service_audits!: Sequelize.HasManySetAssociationsMixin<order_of_service_audits, order_of_service_auditsId>;
  addOrder_of_service_audit!: Sequelize.HasManyAddAssociationMixin<order_of_service_audits, order_of_service_auditsId>;
  addOrder_of_service_audits!: Sequelize.HasManyAddAssociationsMixin<order_of_service_audits, order_of_service_auditsId>;
  createOrder_of_service_audit!: Sequelize.HasManyCreateAssociationMixin<order_of_service_audits>;
  removeOrder_of_service_audit!: Sequelize.HasManyRemoveAssociationMixin<order_of_service_audits, order_of_service_auditsId>;
  removeOrder_of_service_audits!: Sequelize.HasManyRemoveAssociationsMixin<order_of_service_audits, order_of_service_auditsId>;
  hasOrder_of_service_audit!: Sequelize.HasManyHasAssociationMixin<order_of_service_audits, order_of_service_auditsId>;
  hasOrder_of_service_audits!: Sequelize.HasManyHasAssociationsMixin<order_of_service_audits, order_of_service_auditsId>;
  countOrder_of_service_audits!: Sequelize.HasManyCountAssociationsMixin;
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
  // users hasMany os_offers via operator_id
  os_offers!: os_offers[];
  getOs_offers!: Sequelize.HasManyGetAssociationsMixin<os_offers>;
  setOs_offers!: Sequelize.HasManySetAssociationsMixin<os_offers, os_offersId>;
  addOs_offer!: Sequelize.HasManyAddAssociationMixin<os_offers, os_offersId>;
  addOs_offers!: Sequelize.HasManyAddAssociationsMixin<os_offers, os_offersId>;
  createOs_offer!: Sequelize.HasManyCreateAssociationMixin<os_offers>;
  removeOs_offer!: Sequelize.HasManyRemoveAssociationMixin<os_offers, os_offersId>;
  removeOs_offers!: Sequelize.HasManyRemoveAssociationsMixin<os_offers, os_offersId>;
  hasOs_offer!: Sequelize.HasManyHasAssociationMixin<os_offers, os_offersId>;
  hasOs_offers!: Sequelize.HasManyHasAssociationsMixin<os_offers, os_offersId>;
  countOs_offers!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany team_capacity via user_id
  team_capacities!: team_capacity[];
  getTeam_capacities!: Sequelize.HasManyGetAssociationsMixin<team_capacity>;
  setTeam_capacities!: Sequelize.HasManySetAssociationsMixin<team_capacity, team_capacityId>;
  addTeam_capacity!: Sequelize.HasManyAddAssociationMixin<team_capacity, team_capacityId>;
  addTeam_capacities!: Sequelize.HasManyAddAssociationsMixin<team_capacity, team_capacityId>;
  createTeam_capacity!: Sequelize.HasManyCreateAssociationMixin<team_capacity>;
  removeTeam_capacity!: Sequelize.HasManyRemoveAssociationMixin<team_capacity, team_capacityId>;
  removeTeam_capacities!: Sequelize.HasManyRemoveAssociationsMixin<team_capacity, team_capacityId>;
  hasTeam_capacity!: Sequelize.HasManyHasAssociationMixin<team_capacity, team_capacityId>;
  hasTeam_capacities!: Sequelize.HasManyHasAssociationsMixin<team_capacity, team_capacityId>;
  countTeam_capacities!: Sequelize.HasManyCountAssociationsMixin;
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
