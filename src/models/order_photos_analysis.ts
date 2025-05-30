import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { order_photos, order_photosId } from './order_photos';
import type { willy_requests, willy_requestsId } from './willy_requests';

export interface order_photos_analysisAttributes {
  id: number;
  order_photo_id: number;
  willy_request_id?: number;
  analysis_id: string;
  status: string;
  error?: string;
  width_m?: string;
  height_m?: string;
  area_m?: string;
  bounding_box?: object;
  thumbnail_url?: string;
}

export type order_photos_analysisPk = "id";
export type order_photos_analysisId = order_photos_analysis[order_photos_analysisPk];
export type order_photos_analysisOptionalAttributes = "id" | "willy_request_id" | "error" | "width_m" | "height_m" | "area_m" | "bounding_box" | "thumbnail_url";
export type order_photos_analysisCreationAttributes = Optional<order_photos_analysisAttributes, order_photos_analysisOptionalAttributes>;

export class order_photos_analysis extends Model<order_photos_analysisAttributes, order_photos_analysisCreationAttributes> implements order_photos_analysisAttributes {
  id!: number;
  order_photo_id!: number;
  willy_request_id?: number;
  analysis_id!: string;
  status!: string;
  error?: string;
  width_m?: string;
  height_m?: string;
  area_m?: string;
  bounding_box?: object;
  thumbnail_url?: string;

  // order_photos_analysis belongsTo order_photos via order_photo_id
  order_photo!: order_photos;
  getOrder_photo!: Sequelize.BelongsToGetAssociationMixin<order_photos>;
  setOrder_photo!: Sequelize.BelongsToSetAssociationMixin<order_photos, order_photosId>;
  createOrder_photo!: Sequelize.BelongsToCreateAssociationMixin<order_photos>;
  // order_photos_analysis belongsTo willy_requests via willy_request_id
  willy_request!: willy_requests;
  getWilly_request!: Sequelize.BelongsToGetAssociationMixin<willy_requests>;
  setWilly_request!: Sequelize.BelongsToSetAssociationMixin<willy_requests, willy_requestsId>;
  createWilly_request!: Sequelize.BelongsToCreateAssociationMixin<willy_requests>;

  static initModel(sequelize: Sequelize.Sequelize): typeof order_photos_analysis {
    return order_photos_analysis.init({
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
    order_photo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'order_photos',
        key: 'id'
      }
    },
    willy_request_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'willy_requests',
        key: 'id'
      }
    },
    analysis_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    error: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    width_m: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    height_m: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    area_m: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bounding_box: {
      type: DataTypes.JSON,
      allowNull: true
    },
    thumbnail_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_photos_analysis',
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
        name: "order_photo_id",
        using: "BTREE",
        fields: [
          { name: "order_photo_id" },
        ]
      },
      {
        name: "willy_request_id",
        using: "BTREE",
        fields: [
          { name: "willy_request_id" },
        ]
      },
    ]
  });
  }
}
