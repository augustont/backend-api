import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { execution_units, execution_unitsId } from './execution_units';

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
