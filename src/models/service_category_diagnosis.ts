import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { service_categories, service_categoriesId } from './service_categories';
import type { service_diagnosis, service_diagnosisId } from './service_diagnosis';

export interface service_category_diagnosisAttributes {
  id: number;
  category_id?: number;
  diagnosis_id?: number;
  is_success?: number;
}

export type service_category_diagnosisPk = "id";
export type service_category_diagnosisId = service_category_diagnosis[service_category_diagnosisPk];
export type service_category_diagnosisOptionalAttributes = "id" | "category_id" | "diagnosis_id" | "is_success";
export type service_category_diagnosisCreationAttributes = Optional<service_category_diagnosisAttributes, service_category_diagnosisOptionalAttributes>;

export class service_category_diagnosis extends Model<service_category_diagnosisAttributes, service_category_diagnosisCreationAttributes> implements service_category_diagnosisAttributes {
  id!: number;
  category_id?: number;
  diagnosis_id?: number;
  is_success?: number;

  // service_category_diagnosis belongsTo service_categories via category_id
  category!: service_categories;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<service_categories>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<service_categories, service_categoriesId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<service_categories>;
  // service_category_diagnosis belongsTo service_diagnosis via diagnosis_id
  diagnosis!: service_diagnosis;
  getDiagnosis!: Sequelize.BelongsToGetAssociationMixin<service_diagnosis>;
  setDiagnosis!: Sequelize.BelongsToSetAssociationMixin<service_diagnosis, service_diagnosisId>;
  createDiagnosis!: Sequelize.BelongsToCreateAssociationMixin<service_diagnosis>;

  static initModel(sequelize: Sequelize.Sequelize): typeof service_category_diagnosis {
    return service_category_diagnosis.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true

  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
        },
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'service_categories',
        key: 'id'
      }
    },
    diagnosis_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'service_diagnosis',
        key: 'id'
      }
    },
    is_success: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'service_category_diagnosis',
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
        name: "category_id",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "diagnosis_id",
        using: "BTREE",
        fields: [
          { name: "diagnosis_id" },
        ]
      },
    ]
  });
  }
}
