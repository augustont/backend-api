import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { messages_segmentations, messages_segmentationsId } from './messages_segmentations';

export interface messagesAttributes {
  id: number;
  title: string;
  message: string;
  segmentations?: string;
  recurrence?: string;
  oldStartDate?: string;
  finishDate?: string;
  lastSend?: Date;
  frequency?: number;
  enabled?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  startDate?: Date;
}

export type messagesPk = "id";
export type messagesId = messages[messagesPk];
export type messagesOptionalAttributes = "id" | "segmentations" | "recurrence" | "oldStartDate" | "finishDate" | "lastSend" | "frequency" | "enabled" | "createdAt" | "updatedAt" | "deletedAt" | "startDate";
export type messagesCreationAttributes = Optional<messagesAttributes, messagesOptionalAttributes>;

export class messages extends Model<messagesAttributes, messagesCreationAttributes> implements messagesAttributes {
  id!: number;
  title!: string;
  message!: string;
  segmentations?: string;
  recurrence?: string;
  oldStartDate?: string;
  finishDate?: string;
  lastSend?: Date;
  frequency?: number;
  enabled?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  startDate?: Date;

  // messages hasMany messages_segmentations via messageId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof messages {
    return messages.init({
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
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    segmentations: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    recurrence: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    oldStartDate: {
      type: DataTypes.STRING(27),
      allowNull: true,
    },
    finishDate: {
      type: DataTypes.STRING(27),
      allowNull: true,
    },
    lastSend: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    frequency: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    sequelize,
    tableName: 'messages',
    timestamps: false,
    paranoid: true,
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
