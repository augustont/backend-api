import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { orders_of_service, orders_of_serviceId } from './orders_of_service';

export interface os_feedbacksAttributes {
  id: number;
  order_of_service_id?: number;
  was_performed?: number;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type os_feedbacksPk = "id";
export type os_feedbacksId = os_feedbacks[os_feedbacksPk];
export type os_feedbacksOptionalAttributes = "id" | "order_of_service_id" | "was_performed" | "description" | "created_at" | "updated_at" | "deleted_at";
export type os_feedbacksCreationAttributes = Optional<os_feedbacksAttributes, os_feedbacksOptionalAttributes>;

export class os_feedbacks extends Model<os_feedbacksAttributes, os_feedbacksCreationAttributes> implements os_feedbacksAttributes {
  id!: number;
  order_of_service_id?: number;
  was_performed?: number;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // os_feedbacks belongsTo orders_of_service via order_of_service_id
  order_of_service!: orders_of_service;
  getOrder_of_service!: Sequelize.BelongsToGetAssociationMixin<orders_of_service>;
  setOrder_of_service!: Sequelize.BelongsToSetAssociationMixin<orders_of_service, orders_of_serviceId>;
  createOrder_of_service!: Sequelize.BelongsToCreateAssociationMixin<orders_of_service>;

  static initModel(sequelize: Sequelize.Sequelize): typeof os_feedbacks {
    return os_feedbacks.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_of_service_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders_of_service',
        key: 'id'
      }
    },
    was_performed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'os_feedbacks',
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
        name: "order_of_service_id",
        using: "BTREE",
        fields: [
          { name: "order_of_service_id" },
        ]
      },
    ]
  });
  }
}
