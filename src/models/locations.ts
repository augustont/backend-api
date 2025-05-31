import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface locationsAttributes {
  id: number;
  wily_id: number;
  region_id: number;
  latitude: number;
  longitude: number;
  accuracy: number;
  speed: number;
  datetime: Date;
}

export type locationsPk = "id";
export type locationsId = locations[locationsPk];
export type locationsOptionalAttributes = "id" | "datetime";
export type locationsCreationAttributes = Optional<locationsAttributes, locationsOptionalAttributes>;

export class locations extends Model<locationsAttributes, locationsCreationAttributes> implements locationsAttributes {
  id!: number;
  wily_id!: number;
  region_id!: number;
  latitude!: number;
  longitude!: number;
  accuracy!: number;
  speed!: number;
  datetime!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof locations {
    return locations.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
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
    wily_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT(16,8),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT(16,8),
      allowNull: false,
    },
    accuracy: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false,
    },
    speed: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false,
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }, {
    sequelize,
    tableName: 'locations',
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
    ],
  });
  }
}
