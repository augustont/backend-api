import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { messages_segmentations, messages_segmentationsId } from './messages_segmentations';
import type { willys_segmentations, willys_segmentationsId } from './willys_segmentations';

export interface segmentationsAttributes {
  id: number;
  name?: string;
  description?: string;
  wilys?: string;
  enabled?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type segmentationsPk = "id";
export type segmentationsId = segmentations[segmentationsPk];
export type segmentationsOptionalAttributes = "id" | "name" | "description" | "wilys" | "enabled" | "createdAt" | "updatedAt" | "deletedAt";
export type segmentationsCreationAttributes = Optional<segmentationsAttributes, segmentationsOptionalAttributes>;

export class segmentations extends Model<segmentationsAttributes, segmentationsCreationAttributes> implements segmentationsAttributes {
  id!: number;
  name?: string;
  description?: string;
  wilys?: string;
  enabled?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // segmentations hasMany messages_segmentations via segmentationId
  messages_segmentations!: messages_segmentations[];
  getMessages_segmentations!: Sequelize.HasManyGetAssociationsMixin<messages_segmentations>;
  setMessages_segmentations!: Sequelize.HasManySetAssociationsMixin<messages_segmentations, messages_segmentationsId>;
  addMessages_segmentation!: Sequelize.HasManyAddAssociationMixin<messages_segmentations, messages_segmentationsId>;
  addMessages_segmentations!: Sequelize.HasManyAddAssociationsMixin<messages_segmentations, messages_segmentationsId>;
  createMessages_segmentation!: Sequelize.HasManyCreateAssociationMixin<messages_segmentations>;
  removeMessages_segmentation!: Sequelize.HasManyRemoveAssociationMixin<messages_segmentations, messages_segmentationsId>;
  removeMessages_segmentations!: Sequelize.HasManyRemoveAssociationsMixin<messages_segmentations, messages_segmentationsId>;
  hasMessages_segmentation!: Sequelize.HasManyHasAssociationMixin<messages_segmentations, messages_segmentationsId>;
  hasMessages_segmentations!: Sequelize.HasManyHasAssociationsMixin<messages_segmentations, messages_segmentationsId>;
  countMessages_segmentations!: Sequelize.HasManyCountAssociationsMixin;
  // segmentations hasMany willys_segmentations via segmentationId
  willys_segmentations!: willys_segmentations[];
  getWillys_segmentations!: Sequelize.HasManyGetAssociationsMixin<willys_segmentations>;
  setWillys_segmentations!: Sequelize.HasManySetAssociationsMixin<willys_segmentations, willys_segmentationsId>;
  addWillys_segmentation!: Sequelize.HasManyAddAssociationMixin<willys_segmentations, willys_segmentationsId>;
  addWillys_segmentations!: Sequelize.HasManyAddAssociationsMixin<willys_segmentations, willys_segmentationsId>;
  createWillys_segmentation!: Sequelize.HasManyCreateAssociationMixin<willys_segmentations>;
  removeWillys_segmentation!: Sequelize.HasManyRemoveAssociationMixin<willys_segmentations, willys_segmentationsId>;
  removeWillys_segmentations!: Sequelize.HasManyRemoveAssociationsMixin<willys_segmentations, willys_segmentationsId>;
  hasWillys_segmentation!: Sequelize.HasManyHasAssociationMixin<willys_segmentations, willys_segmentationsId>;
  hasWillys_segmentations!: Sequelize.HasManyHasAssociationsMixin<willys_segmentations, willys_segmentationsId>;
  countWillys_segmentations!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof segmentations {
    return segmentations.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wilys: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'segmentations',
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
    ]
  });
  }
}
