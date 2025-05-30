import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { customer_os_categories_type, customer_os_categories_typeId } from './customer_os_categories_type';
import type { execution_units, execution_unitsId } from './execution_units';
import type { service_categories, service_categoriesId } from './service_categories';

export interface customersAttributes {
  id: number;
  name?: string;
  cnpj?: string;
  endereco?: string;
  createdAt: Date;
  updatedAt: Date;
  quantidade_unidades?: number;
  logo?: string;
}

export type customersPk = "id";
export type customersId = customers[customersPk];
export type customersOptionalAttributes = "id" | "name" | "cnpj" | "endereco" | "createdAt" | "updatedAt" | "quantidade_unidades" | "logo";
export type customersCreationAttributes = Optional<customersAttributes, customersOptionalAttributes>;

export class customers extends Model<customersAttributes, customersCreationAttributes> implements customersAttributes {
  id!: number;
  name?: string;
  cnpj?: string;
  endereco?: string;
  createdAt!: Date;
  updatedAt!: Date;
  quantidade_unidades?: number;
  logo?: string;

  // customers hasMany customer_os_categories_type via customer_id
  customer_os_categories_types!: customer_os_categories_type[];
  getCustomer_os_categories_types!: Sequelize.HasManyGetAssociationsMixin<customer_os_categories_type>;
  setCustomer_os_categories_types!: Sequelize.HasManySetAssociationsMixin<customer_os_categories_type, customer_os_categories_typeId>;
  addCustomer_os_categories_type!: Sequelize.HasManyAddAssociationMixin<customer_os_categories_type, customer_os_categories_typeId>;
  addCustomer_os_categories_types!: Sequelize.HasManyAddAssociationsMixin<customer_os_categories_type, customer_os_categories_typeId>;
  createCustomer_os_categories_type!: Sequelize.HasManyCreateAssociationMixin<customer_os_categories_type>;
  removeCustomer_os_categories_type!: Sequelize.HasManyRemoveAssociationMixin<customer_os_categories_type, customer_os_categories_typeId>;
  removeCustomer_os_categories_types!: Sequelize.HasManyRemoveAssociationsMixin<customer_os_categories_type, customer_os_categories_typeId>;
  hasCustomer_os_categories_type!: Sequelize.HasManyHasAssociationMixin<customer_os_categories_type, customer_os_categories_typeId>;
  hasCustomer_os_categories_types!: Sequelize.HasManyHasAssociationsMixin<customer_os_categories_type, customer_os_categories_typeId>;
  countCustomer_os_categories_types!: Sequelize.HasManyCountAssociationsMixin;
  // customers hasMany execution_units via customer_id
  execution_units!: execution_units[];
  getExecution_units!: Sequelize.HasManyGetAssociationsMixin<execution_units>;
  setExecution_units!: Sequelize.HasManySetAssociationsMixin<execution_units, execution_unitsId>;
  addExecution_unit!: Sequelize.HasManyAddAssociationMixin<execution_units, execution_unitsId>;
  addExecution_units!: Sequelize.HasManyAddAssociationsMixin<execution_units, execution_unitsId>;
  createExecution_unit!: Sequelize.HasManyCreateAssociationMixin<execution_units>;
  removeExecution_unit!: Sequelize.HasManyRemoveAssociationMixin<execution_units, execution_unitsId>;
  removeExecution_units!: Sequelize.HasManyRemoveAssociationsMixin<execution_units, execution_unitsId>;
  hasExecution_unit!: Sequelize.HasManyHasAssociationMixin<execution_units, execution_unitsId>;
  hasExecution_units!: Sequelize.HasManyHasAssociationsMixin<execution_units, execution_unitsId>;
  countExecution_units!: Sequelize.HasManyCountAssociationsMixin;
  // customers hasMany service_categories via customer_id
  service_categories!: service_categories[];
  getService_categories!: Sequelize.HasManyGetAssociationsMixin<service_categories>;
  setService_categories!: Sequelize.HasManySetAssociationsMixin<service_categories, service_categoriesId>;
  addService_category!: Sequelize.HasManyAddAssociationMixin<service_categories, service_categoriesId>;
  addService_categories!: Sequelize.HasManyAddAssociationsMixin<service_categories, service_categoriesId>;
  createService_category!: Sequelize.HasManyCreateAssociationMixin<service_categories>;
  removeService_category!: Sequelize.HasManyRemoveAssociationMixin<service_categories, service_categoriesId>;
  removeService_categories!: Sequelize.HasManyRemoveAssociationsMixin<service_categories, service_categoriesId>;
  hasService_category!: Sequelize.HasManyHasAssociationMixin<service_categories, service_categoriesId>;
  hasService_categories!: Sequelize.HasManyHasAssociationsMixin<service_categories, service_categoriesId>;
  countService_categories!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof customers {
    return customers.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      cnpj: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      endereco: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      quantidade_unidades: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      logo: {
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
      tableName: 'customers',
      timestamps: true,
      underscored: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
  
}
