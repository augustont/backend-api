import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface supply_unitAttributes {
  address?: string;
  name?: string;
  district?: string;
}

export type supply_unitOptionalAttributes = "address" | "name" | "district";
export type supply_unitCreationAttributes = Optional<supply_unitAttributes, supply_unitOptionalAttributes>;

export class supply_unit extends Model<supply_unitAttributes, supply_unitCreationAttributes> implements supply_unitAttributes {
  address?: string;
  name?: string;
  district?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof supply_unit {
    return supply_unit.init({
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,

  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
        },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    district: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    sequelize,
    tableName: 'supply_unit',
    timestamps: false,
  });
  }
}
