import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { order_photos_analysis, order_photos_analysisId } from './order_photos_analysis';

export interface order_photosAttributes {
  id: number;
  order_service_id: number;
  willy_request_id?: number;
  url?: string;
  is_selected?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  type?: string;
  pitch?: number;
  roll?: number;
}

export type order_photosPk = "id";
export type order_photosId = order_photos[order_photosPk];
export type order_photosOptionalAttributes = "id" | "willy_request_id" | "url" | "is_selected" | "created_at" | "updated_at" | "deleted_at" | "type" | "pitch" | "roll";
export type order_photosCreationAttributes = Optional<order_photosAttributes, order_photosOptionalAttributes>;

export class order_photos extends Model<order_photosAttributes, order_photosCreationAttributes> implements order_photosAttributes {
  id!: number;
  order_service_id!: number;
  willy_request_id?: number;
  url?: string;
  is_selected?: number;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  type?: string;
  pitch?: number;
  roll?: number;

  // order_photos hasMany order_photos_analysis via order_photo_id
  order_photos_analyses!: order_photos_analysis[];
  getOrder_photos_analyses!: Sequelize.HasManyGetAssociationsMixin<order_photos_analysis>;
  setOrder_photos_analyses!: Sequelize.HasManySetAssociationsMixin<order_photos_analysis, order_photos_analysisId>;
  addOrder_photos_analyasis!: Sequelize.HasManyAddAssociationMixin<order_photos_analysis, order_photos_analysisId>;
  addOrder_photos_analyses!: Sequelize.HasManyAddAssociationsMixin<order_photos_analysis, order_photos_analysisId>;
  createOrder_photos_analyasis!: Sequelize.HasManyCreateAssociationMixin<order_photos_analysis>;
  removeOrder_photos_analyasis!: Sequelize.HasManyRemoveAssociationMixin<order_photos_analysis, order_photos_analysisId>;
  removeOrder_photos_analyses!: Sequelize.HasManyRemoveAssociationsMixin<order_photos_analysis, order_photos_analysisId>;
  hasOrder_photos_analyasis!: Sequelize.HasManyHasAssociationMixin<order_photos_analysis, order_photos_analysisId>;
  hasOrder_photos_analyses!: Sequelize.HasManyHasAssociationsMixin<order_photos_analysis, order_photos_analysisId>;
  countOrder_photos_analyses!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof order_photos {
    return order_photos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_service_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    willy_request_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_selected: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "image"
    },
    pitch: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    roll: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_photos',
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
        name: "idx_order_photos_selected_request_date",
        using: "BTREE",
        fields: [
          { name: "is_selected" },
          { name: "willy_request_id" },
          { name: "created_at" },
        ]
      },
    ]
  });
  }
}
