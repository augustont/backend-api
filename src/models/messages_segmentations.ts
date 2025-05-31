import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { messages, messagesId } from './messages';
import type { segmentations, segmentationsId } from './segmentations';

export interface messages_segmentationsAttributes {
  id: number;
  messageId: number;
  segmentationId: number;
}

export type messages_segmentationsPk = "id";
export type messages_segmentationsId = messages_segmentations[messages_segmentationsPk];
export type messages_segmentationsOptionalAttributes = "id";
export type messages_segmentationsCreationAttributes = Optional<messages_segmentationsAttributes, messages_segmentationsOptionalAttributes>;

export class messages_segmentations extends Model<messages_segmentationsAttributes, messages_segmentationsCreationAttributes> implements messages_segmentationsAttributes {
  id!: number;
  messageId!: number;
  segmentationId!: number;

  // messages_segmentations belongsTo messages via messageId
  message!: messages;
  getMessage!: Sequelize.BelongsToGetAssociationMixin<messages>;
  setMessage!: Sequelize.BelongsToSetAssociationMixin<messages, messagesId>;
  createMessage!: Sequelize.BelongsToCreateAssociationMixin<messages>;
  // messages_segmentations belongsTo segmentations via segmentationId
  segmentation!: segmentations;
  getSegmentation!: Sequelize.BelongsToGetAssociationMixin<segmentations>;
  setSegmentation!: Sequelize.BelongsToSetAssociationMixin<segmentations, segmentationsId>;
  createSegmentation!: Sequelize.BelongsToCreateAssociationMixin<segmentations>;

  static initModel(sequelize: Sequelize.Sequelize): typeof messages_segmentations {
    return messages_segmentations.init({
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
    messageId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'messages',
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
    tableName: 'messages_segmentations',
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
        name: "FK_messageId",
        using: "BTREE",
        fields: [
          { name: "messageId" },
        ],
      },
      {
        name: "FK_segmentationId",
        using: "BTREE",
        fields: [
          { name: "segmentationId" },
        ],
      },
    ],
  });
  }
}
