import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { orders_of_service, orders_of_serviceId } from './orders_of_service';
import type { service_category_diagnosis, service_category_diagnosisId } from './service_category_diagnosis';

export interface service_diagnosisAttributes {
  id: number;
  name?: string;
  deleted_at?: Date;
  created_at: Date;
  updated_at?: Date;
}

export type service_diagnosisPk = "id";
export type service_diagnosisId = service_diagnosis[service_diagnosisPk];
export type service_diagnosisOptionalAttributes = "id" | "name" | "deleted_at" | "created_at" | "updated_at";
export type service_diagnosisCreationAttributes = Optional<service_diagnosisAttributes, service_diagnosisOptionalAttributes>;

export class service_diagnosis extends Model<service_diagnosisAttributes, service_diagnosisCreationAttributes> implements service_diagnosisAttributes {
  id!: number;
  name?: string;
  deleted_at?: Date;
  created_at!: Date;
  updated_at?: Date;

  // service_diagnosis hasMany orders_of_service via service_diagnosis_id
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
  // service_diagnosis hasMany service_category_diagnosis via diagnosis_id
  service_category_diagnoses!: service_category_diagnosis[];
  getService_category_diagnoses!: Sequelize.HasManyGetAssociationsMixin<service_category_diagnosis>;
  setService_category_diagnoses!: Sequelize.HasManySetAssociationsMixin<service_category_diagnosis, service_category_diagnosisId>;
  addService_category_diagnosis!: Sequelize.HasManyAddAssociationMixin<service_category_diagnosis, service_category_diagnosisId>;
  addService_category_diagnoses!: Sequelize.HasManyAddAssociationsMixin<service_category_diagnosis, service_category_diagnosisId>;
  createService_category_diagnosis!: Sequelize.HasManyCreateAssociationMixin<service_category_diagnosis>;
  removeService_category_diagnosis!: Sequelize.HasManyRemoveAssociationMixin<service_category_diagnosis, service_category_diagnosisId>;
  removeService_category_diagnoses!: Sequelize.HasManyRemoveAssociationsMixin<service_category_diagnosis, service_category_diagnosisId>;
  hasService_category_diagnosis!: Sequelize.HasManyHasAssociationMixin<service_category_diagnosis, service_category_diagnosisId>;
  hasService_category_diagnoses!: Sequelize.HasManyHasAssociationsMixin<service_category_diagnosis, service_category_diagnosisId>;
  countService_category_diagnoses!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof service_diagnosis {
    return service_diagnosis.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'service_diagnosis',
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
    ]
  });
  }
}
