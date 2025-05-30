import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { willy_requests, willy_requestsId } from './willy_requests';
import type { willys, willysId } from './willys';

export interface payment_indicationsAttributes {
  id: number;
  payment_date?: string;
  amount?: number;
  willy_id?: number;
  willy_request_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type payment_indicationsPk = "id";
export type payment_indicationsId = payment_indications[payment_indicationsPk];
export type payment_indicationsOptionalAttributes = "id" | "payment_date" | "amount" | "willy_id" | "willy_request_id" | "created_at" | "updated_at" | "deleted_at";
export type payment_indicationsCreationAttributes = Optional<payment_indicationsAttributes, payment_indicationsOptionalAttributes>;

export class payment_indications extends Model<payment_indicationsAttributes, payment_indicationsCreationAttributes> implements payment_indicationsAttributes {
  id!: number;
  payment_date?: string;
  amount?: number;
  willy_id?: number;
  willy_request_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // payment_indications belongsTo willy_requests via willy_request_id
  willy_request!: willy_requests;
  getWilly_request!: Sequelize.BelongsToGetAssociationMixin<willy_requests>;
  setWilly_request!: Sequelize.BelongsToSetAssociationMixin<willy_requests, willy_requestsId>;
  createWilly_request!: Sequelize.BelongsToCreateAssociationMixin<willy_requests>;
  // payment_indications belongsTo willys via willy_id
  willy!: willys;
  getWilly!: Sequelize.BelongsToGetAssociationMixin<willys>;
  setWilly!: Sequelize.BelongsToSetAssociationMixin<willys, willysId>;
  createWilly!: Sequelize.BelongsToCreateAssociationMixin<willys>;

  static initModel(sequelize: Sequelize.Sequelize): typeof payment_indications {
    return payment_indications.init({
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
    tableName: 'payment_indications',
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
        name: "payment_indications_ibfk_2",
        using: "BTREE",
        fields: [
          { name: "willy_request_id" },
        ]
      },
    ]
  });
  }
}
