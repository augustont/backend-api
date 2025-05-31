import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { willys, willysId } from './willys';

export interface willys_mappingAttributes {
  id: number;
  willy_id?: number;
  question_id?: string;
  url?: string;
  latitude?: string;
  longitude?: string;
  status?: 'online' | 'offline';
  accuracy?: number;
  createad_at: Date;
  is_mobile?: number;
}

export type willys_mappingPk = "id";
export type willys_mappingId = willys_mapping[willys_mappingPk];
export type willys_mappingOptionalAttributes = "id" | "willy_id" | "question_id" | "url" | "latitude" | "longitude" | "status" | "accuracy" | "createad_at" | "is_mobile";
export type willys_mappingCreationAttributes = Optional<willys_mappingAttributes, willys_mappingOptionalAttributes>;

export class willys_mapping extends Model<willys_mappingAttributes, willys_mappingCreationAttributes> implements willys_mappingAttributes {
  id!: number;
  willy_id?: number;
  question_id?: string;
  url?: string;
  latitude?: string;
  longitude?: string;
  status?: 'online' | 'offline';
  accuracy?: number;
  createad_at!: Date;
  is_mobile?: number;

  // willys_mapping belongsTo willys via willy_id
  willy!: willys;
  getWilly!: Sequelize.BelongsToGetAssociationMixin<willys>;
  setWilly!: Sequelize.BelongsToSetAssociationMixin<willys, willysId>;
  createWilly!: Sequelize.BelongsToCreateAssociationMixin<willys>;

  static initModel(sequelize: Sequelize.Sequelize): typeof willys_mapping {
    return willys_mapping.init({
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
    willy_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'willys',
        key: 'id',
      },
    },
    question_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    latitude: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    longitude: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('online','offline'),
      allowNull: true,
      defaultValue: "offline",
    },
    accuracy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createad_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    is_mobile: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  }, {
    sequelize,
    tableName: 'willys_mapping',
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
        name: "willy_id",
        using: "BTREE",
        fields: [
          { name: "willy_id" },
        ],
      },
    ],
  });
  }
}
