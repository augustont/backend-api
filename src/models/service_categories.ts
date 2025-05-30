import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { customers, customersId } from './customers';
import type { service_category_diagnosis, service_category_diagnosisId } from './service_category_diagnosis';
import type { service_types, service_typesId } from './service_types';

export interface service_categoriesAttributes {
  id: number;
  customer_id?: number;
  name?: string;
  description?: string;
  deleted_at?: Date;
  created_at: Date;
  updated_at?: Date;
}

export type service_categoriesPk = "id";
export type service_categoriesId = service_categories[service_categoriesPk];
export type service_categoriesOptionalAttributes = "id" | "customer_id" | "name" | "description" | "deleted_at" | "created_at" | "updated_at";
export type service_categoriesCreationAttributes = Optional<service_categoriesAttributes, service_categoriesOptionalAttributes>;

export class service_categories extends Model<service_categoriesAttributes, service_categoriesCreationAttributes> implements service_categoriesAttributes {
  id!: number;
  customer_id?: number;
  name?: string;
  description?: string;
  deleted_at?: Date;
  created_at!: Date;
  updated_at?: Date;

  // service_categories belongsTo customers via customer_id
  customer!: customers;
  getCustomer!: Sequelize.BelongsToGetAssociationMixin<customers>;
  setCustomer!: Sequelize.BelongsToSetAssociationMixin<customers, customersId>;
  createCustomer!: Sequelize.BelongsToCreateAssociationMixin<customers>;
  // service_categories hasMany service_category_diagnosis via category_id
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
  // service_categories hasMany service_types via category_id
  service_types!: service_types[];
  getService_types!: Sequelize.HasManyGetAssociationsMixin<service_types>;
  setService_types!: Sequelize.HasManySetAssociationsMixin<service_types, service_typesId>;
  addService_type!: Sequelize.HasManyAddAssociationMixin<service_types, service_typesId>;
  addService_types!: Sequelize.HasManyAddAssociationsMixin<service_types, service_typesId>;
  createService_type!: Sequelize.HasManyCreateAssociationMixin<service_types>;
  removeService_type!: Sequelize.HasManyRemoveAssociationMixin<service_types, service_typesId>;
  removeService_types!: Sequelize.HasManyRemoveAssociationsMixin<service_types, service_typesId>;
  hasService_type!: Sequelize.HasManyHasAssociationMixin<service_types, service_typesId>;
  hasService_types!: Sequelize.HasManyHasAssociationsMixin<service_types, service_typesId>;
  countService_types!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof service_categories {
    return service_categories.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'service_categories',
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
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
  }
}
