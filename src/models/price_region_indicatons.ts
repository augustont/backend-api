import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface price_region_indicatonsAttributes {
  id: number;
  latitude?: number;
  longitude?: number;
  radius?: number;
  amount?: number;
  description?: string;
  is_default?: number;
}

export type price_region_indicatonsPk = "id";
export type price_region_indicatonsId = price_region_indicatons[price_region_indicatonsPk];
export type price_region_indicatonsOptionalAttributes = "id" | "latitude" | "longitude" | "radius" | "amount" | "description" | "is_default";
export type price_region_indicatonsCreationAttributes = Optional<price_region_indicatonsAttributes, price_region_indicatonsOptionalAttributes>;

export class price_region_indicatons extends Model<price_region_indicatonsAttributes, price_region_indicatonsCreationAttributes> implements price_region_indicatonsAttributes {
  id!: number;
  latitude?: number;
  longitude?: number;
  radius?: number;
  amount?: number;
  description?: string;
  is_default?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof price_region_indicatons {
    return price_region_indicatons.init({
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
    latitude: {
      type: DataTypes.DECIMAL(11,8),
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL(11,8),
      allowNull: true
    },
    radius: {
      type: DataTypes.DECIMAL(18,8),
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'price_region_indicatons',
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
    ]
  });
  }
}
