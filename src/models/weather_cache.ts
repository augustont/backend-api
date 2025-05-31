import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface weather_cacheAttributes {
  id: number;
  latitude?: number;
  longitude?: number;
  probability_rain?: number;
  created_at?: Date;
}

export type weather_cachePk = "id";
export type weather_cacheId = weather_cache[weather_cachePk];
export type weather_cacheOptionalAttributes = "id" | "latitude" | "longitude" | "probability_rain" | "created_at";
export type weather_cacheCreationAttributes = Optional<weather_cacheAttributes, weather_cacheOptionalAttributes>;

export class weather_cache extends Model<weather_cacheAttributes, weather_cacheCreationAttributes> implements weather_cacheAttributes {
  id!: number;
  latitude?: number;
  longitude?: number;
  probability_rain?: number;
  created_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof weather_cache {
    return weather_cache.init({
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
    probability_rain: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'weather_cache',
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
