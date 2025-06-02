import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { execution_units, execution_unitsId } from './execution_units';
import type { os_feedbacks, os_feedbacksId } from './os_feedbacks';
import type { users, usersId } from './users';
import type { willy_requests, willy_requestsId } from './willy_requests';

export interface orders_of_serviceAttributes {
  id: number;
  execution_unit_id?: number;
  os_number?: string;
  os_status?: 'em atendimento' | 'aberta' | 'solucionada' | 'nao solucionada' | 'cancelada';
  os_city?: string;
  os_state?: string;
  os_district?: string;
  os_address?: string;
  os_address_number?: string;
  latitude?: string;
  longitude?: string;
  os_category_id?: number;
  desc_report?: string;
  desc_problem?: string;
  orders_related?: string;
  co2_not_emmited?: number;
  ugr_distance?: number;
  diagnosis?: string;
  concessionaire?: string;
  insert_date?: Date;
  updated_at: Date;
  created_at: Date;
  deleted_at?: Date;
  subprefecture?: string;
  polo?: string;
  canceled_by_user_id?: number;
  cancel_reason?: string;
  cancel_observation?: string;
  cancel_date?: Date;
  contest?: number;
  h3Id?: string;
  service_type_id?: number;
  service_diagnosis_id?: number;
  reserve_expires_in?: Date;
  priority_id?: number;
  in_supervision?: number;
}

export type orders_of_servicePk = "id";
export type orders_of_serviceId = orders_of_service[orders_of_servicePk];
export type orders_of_serviceOptionalAttributes = "id" | "execution_unit_id" | "os_number" | "os_status" | "os_city" | "os_state" | "os_district" | "os_address" | "os_address_number" | "latitude" | "longitude" | "os_category_id" | "desc_report" | "desc_problem" | "orders_related" | "co2_not_emmited" | "ugr_distance" | "diagnosis" | "concessionaire" | "insert_date" | "updated_at" | "created_at" | "deleted_at" | "subprefecture" | "polo" | "canceled_by_user_id" | "cancel_reason" | "cancel_observation" | "cancel_date" | "contest" | "h3Id" | "service_type_id" | "service_diagnosis_id" | "reserve_expires_in" | "priority_id" | "in_supervision";
export type orders_of_serviceCreationAttributes = Optional<orders_of_serviceAttributes, orders_of_serviceOptionalAttributes>;

export class orders_of_service extends Model<orders_of_serviceAttributes, orders_of_serviceCreationAttributes> implements orders_of_serviceAttributes {
  id!: number;
  execution_unit_id?: number;
  os_number?: string;
  os_status?: 'em atendimento' | 'aberta' | 'solucionada' | 'nao solucionada' | 'cancelada';
  os_city?: string;
  os_state?: string;
  os_district?: string;
  os_address?: string;
  os_address_number?: string;
  latitude?: string;
  longitude?: string;
  os_category_id?: number;
  desc_report?: string;
  desc_problem?: string;
  orders_related?: string;
  co2_not_emmited?: number;
  ugr_distance?: number;
  diagnosis?: string;
  concessionaire?: string;
  insert_date?: Date;
  updated_at!: Date;
  created_at!: Date;
  deleted_at?: Date;
  subprefecture?: string;
  polo?: string;
  canceled_by_user_id?: number;
  cancel_reason?: string;
  cancel_observation?: string;
  cancel_date?: Date;
  contest?: number;
  h3Id?: string;
  service_type_id?: number;
  service_diagnosis_id?: number;
  reserve_expires_in?: Date;
  priority_id?: number;
  in_supervision?: number;

  execution_unit!: execution_units;
  getExecution_unit!: Sequelize.BelongsToGetAssociationMixin<execution_units>;
  setExecution_unit!: Sequelize.BelongsToSetAssociationMixin<execution_units, execution_unitsId>;
  createExecution_unit!: Sequelize.BelongsToCreateAssociationMixin<execution_units>;
  os_feedbacks!: os_feedbacks[];
  getOs_feedbacks!: Sequelize.HasManyGetAssociationsMixin<os_feedbacks>;
  setOs_feedbacks!: Sequelize.HasManySetAssociationsMixin<os_feedbacks, os_feedbacksId>;
  addOs_feedback!: Sequelize.HasManyAddAssociationMixin<os_feedbacks, os_feedbacksId>;
  addOs_feedbacks!: Sequelize.HasManyAddAssociationsMixin<os_feedbacks, os_feedbacksId>;
  createOs_feedback!: Sequelize.HasManyCreateAssociationMixin<os_feedbacks>;
  removeOs_feedback!: Sequelize.HasManyRemoveAssociationMixin<os_feedbacks, os_feedbacksId>;
  removeOs_feedbacks!: Sequelize.HasManyRemoveAssociationsMixin<os_feedbacks, os_feedbacksId>;
  hasOs_feedback!: Sequelize.HasManyHasAssociationMixin<os_feedbacks, os_feedbacksId>;
  hasOs_feedbacks!: Sequelize.HasManyHasAssociationsMixin<os_feedbacks, os_feedbacksId>;
  countOs_feedbacks!: Sequelize.HasManyCountAssociationsMixin;
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
  canceled_by_user!: users;
  getCanceled_by_user!: Sequelize.BelongsToGetAssociationMixin<users>;
  setCanceled_by_user!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createCanceled_by_user!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof orders_of_service {
    return orders_of_service.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
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
      os_status: {
        type: DataTypes.ENUM('em atendimento', 'aberta', 'solucionada', 'nao solucionada', 'cancelada'),
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'orders_of_service',
      timestamps: false,
      paranoid: true
    });
  }
  
}
