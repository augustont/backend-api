import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { segmentations, segmentationsId } from './segmentations';
import type { willys, willysId } from './willys';

export interface willys_segmentationsAttributes {
  id: number;
  willyId: number;
  segmentationId: number;
}

export type willys_segmentationsPk = "id";
export type willys_segmentationsId = willys_segmentations[willys_segmentationsPk];
export type willys_segmentationsOptionalAttributes = "id";
export type willys_segmentationsCreationAttributes = Optional<willys_segmentationsAttributes, willys_segmentationsOptionalAttributes>;

export class willys_segmentations extends Model<willys_segmentationsAttributes, willys_segmentationsCreationAttributes> implements willys_segmentationsAttributes {
  id!: number;
  willyId!: number;
  segmentationId!: number;

  // willys_segmentations belongsTo segmentations via segmentationId
  segmentation!: segmentations;
  getSegmentation!: Sequelize.BelongsToGetAssociationMixin<segmentations>;
  setSegmentation!: Sequelize.BelongsToSetAssociationMixin<segmentations, segmentationsId>;
  createSegmentation!: Sequelize.BelongsToCreateAssociationMixin<segmentations>;
  // willys_segmentations belongsTo willys via willyId
  willy!: willys;
  getWilly!: Sequelize.BelongsToGetAssociationMixin<willys>;
  setWilly!: Sequelize.BelongsToSetAssociationMixin<willys, willysId>;
  createWilly!: Sequelize.BelongsToCreateAssociationMixin<willys>;

  static initModel(sequelize: Sequelize.Sequelize): typeof willys_segmentations {
    return willys_segmentations.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
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
    willyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'willys',
        key: 'id',
      },
    },
    segmentationId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'segmentations',
        key: 'id',
      },
    },
  }, {
    sequelize,
    tableName: 'willys_segmentations',
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
        name: "FK_willys_segmentations_segmentationId",
        using: "BTREE",
        fields: [
          { name: "segmentationId" },
        ],
      },
      {
        name: "FK_willys_segmentations_willyId",
        using: "BTREE",
        fields: [
          { name: "willyId" },
        ],
      },
    ],
  });
  }
}
