import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { willy_requests, willy_requestsId } from './willy_requests';
import type { willys, willysId } from './willys';

export interface payment_bonnusAttributes {
  id: number;
  payment_date?: string;
  amount?: number;
  type?: string;
  willy_id?: number;
  willy_request_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type payment_bonnusPk = "id";
export type payment_bonnusId = payment_bonnus[payment_bonnusPk];
export type payment_bonnusOptionalAttributes = "id" | "payment_date" | "amount" | "type" | "willy_id" | "willy_request_id" | "created_at" | "updated_at" | "deleted_at";
export type payment_bonnusCreationAttributes = Optional<payment_bonnusAttributes, payment_bonnusOptionalAttributes>;

export class payment_bonnus extends Model<payment_bonnusAttributes, payment_bonnusCreationAttributes> implements payment_bonnusAttributes {
  id!: number;
  payment_date?: string;
  amount?: number;
  type?: string;
  willy_id?: number;
  willy_request_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // payment_bonnus belongsTo willy_requests via willy_request_id
  willy_request!: willy_requests;
  getWilly_request!: Sequelize.BelongsToGetAssociationMixin<willy_requests>;
  setWilly_request!: Sequelize.BelongsToSetAssociationMixin<willy_requests, willy_requestsId>;
  createWilly_request!: Sequelize.BelongsToCreateAssociationMixin<willy_requests>;
  // payment_bonnus belongsTo willys via willy_id
  willy!: willys;
  getWilly!: Sequelize.BelongsToGetAssociationMixin<willys>;
  setWilly!: Sequelize.BelongsToSetAssociationMixin<willys, willysId>;
  createWilly!: Sequelize.BelongsToCreateAssociationMixin<willys>;

  static initModel(sequelize: Sequelize.Sequelize): typeof payment_bonnus {
    return payment_bonnus.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    willy_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'willys',
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
    }
  }, {
    sequelize,
    tableName: 'payment_bonnus',
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
        name: "willy_id",
        using: "BTREE",
        fields: [
          { name: "willy_id" },
        ]
      },
      {
        name: "payment_bonnus_ibfk_2",
        using: "BTREE",
        fields: [
          { name: "willy_request_id" },
        ]
      },
    ]
  });
  }
}
