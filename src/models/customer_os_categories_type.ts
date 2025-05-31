import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { customers, customersId } from './customers';

export interface customer_os_categories_typeAttributes {
  id: number;
  customer_id?: number;
  type_id?: number;
}

export type customer_os_categories_typePk = "id";
export type customer_os_categories_typeId = customer_os_categories_type[customer_os_categories_typePk];
export type customer_os_categories_typeOptionalAttributes = "id" | "customer_id" | "type_id";
export type customer_os_categories_typeCreationAttributes = Optional<customer_os_categories_typeAttributes, customer_os_categories_typeOptionalAttributes>;

export class customer_os_categories_type extends Model<customer_os_categories_typeAttributes, customer_os_categories_typeCreationAttributes> implements customer_os_categories_typeAttributes {
  id!: number;
  customer_id?: number;
  type_id?: number;

  // customer_os_categories_type belongsTo customers via customer_id
  customer!: customers;
  getCustomer!: Sequelize.BelongsToGetAssociationMixin<customers>;
  setCustomer!: Sequelize.BelongsToSetAssociationMixin<customers, customersId>;
  createCustomer!: Sequelize.BelongsToCreateAssociationMixin<customers>;

  static initModel(sequelize: Sequelize.Sequelize): typeof customer_os_categories_type {
    return customer_os_categories_type.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,

  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
        },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'customers',
        key: 'id',
      }
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    sequelize,
    tableName: 'customer_os_categories_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ],
      },
      {
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ],
      },
    ],
  });
  }
}
