import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { diagnostic_history, diagnostic_historyId } from './diagnostic_history';
import type { execution_units, execution_unitsId } from './execution_units';
import type { geolocation_history, geolocation_historyId } from './geolocation_history';
import type { order_of_service_audits, order_of_service_auditsId } from './order_of_service_audits';
import type { os_categories, os_categoriesId } from './os_categories';
import type { os_feedbacks, os_feedbacksId } from './os_feedbacks';
import type { os_offers, os_offersId } from './os_offers';
import type { os_priorities, os_prioritiesId } from './os_priorities';
import type { precifications, precificationsId } from './precifications';
import type { service_diagnosis, service_diagnosisId } from './service_diagnosis';
import type { service_types, service_typesId } from './service_types';
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
  precifications!: precifications[];
  getPrecifications!: Sequelize.HasManyGetAssociationsMixin<precifications>;
  setPrecifications!: Sequelize.HasManySetAssociationsMixin<precifications, precificationsId>;
  addPrecification!: Sequelize.HasManyAddAssociationMixin<precifications, precificationsId>;
  addPrecifications!: Sequelize.HasManyAddAssociationsMixin<precifications, precificationsId>;
  createPrecification!: Sequelize.HasManyCreateAssociationMixin<precifications>;
  removePrecification!: Sequelize.HasManyRemoveAssociationMixin<precifications, precificationsId>;
  removePrecifications!: Sequelize.HasManyRemoveAssociationsMixin<precifications, precificationsId>;
  hasPrecification!: Sequelize.HasManyHasAssociationMixin<precifications, precificationsId>;
  hasPrecifications!: Sequelize.HasManyHasAssociationsMixin<precifications, precificationsId>;
  countPrecifications!: Sequelize.HasManyCountAssociationsMixin;
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
  os_category!: os_categories;
  getOs_category!: Sequelize.BelongsToGetAssociationMixin<os_categories>;
  setOs_category!: Sequelize.BelongsToSetAssociationMixin<os_categories, os_categoriesId>;
  createOs_category!: Sequelize.BelongsToCreateAssociationMixin<os_categories>;
  priority!: os_priorities;
  getPriority!: Sequelize.BelongsToGetAssociationMixin<os_priorities>;
  setPriority!: Sequelize.BelongsToSetAssociationMixin<os_priorities, os_prioritiesId>;
  createPriority!: Sequelize.BelongsToCreateAssociationMixin<os_priorities>;
  service_diagnosis!: service_diagnosis;
  getService_diagnosis!: Sequelize.BelongsToGetAssociationMixin<service_diagnosis>;
  setService_diagnosis!: Sequelize.BelongsToSetAssociationMixin<service_diagnosis, service_diagnosisId>;
  createService_diagnosis!: Sequelize.BelongsToCreateAssociationMixin<service_diagnosis>;
  service_type!: service_types;
  getService_type!: Sequelize.BelongsToGetAssociationMixin<service_types>;
  setService_type!: Sequelize.BelongsToSetAssociationMixin<service_types, service_typesId>;
  createService_type!: Sequelize.BelongsToCreateAssociationMixin<service_types>;
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
