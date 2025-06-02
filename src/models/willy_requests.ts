import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { orders_of_service, orders_of_serviceId } from './orders_of_service';
import type { users, usersId } from './users';
import type { willys, willysId } from './willys';

export interface willy_requestsAttributes {
  id: number;
  operator_id?: number;
  wily_id?: number;
  order_of_service_id?: number;
  start_inspection_date?: Date;
  end_inspection_date?: Date;
  status?: 'aguardando' | 'iniciada' | 'concluida' | 'cancelada';
  rating?: number;
  under_analysis?: number;
  price?: number;
  payment_date?: Date;
  payment_status?: number;
  wily_recommendation_id?: number;
  price_recomendation?: number;
  cisp1_session_id?: string;
  rank_id?: number;
  offer_id?: number;
  soft_pad_session_id?: string;
  created_at: Date;
  updated_at: Date;
}

export type willy_requestsPk = "id";
export type willy_requestsId = willy_requests[willy_requestsPk];
export type willy_requestsOptionalAttributes = "id" | "operator_id" | "wily_id" | "order_of_service_id" | "start_inspection_date" | "end_inspection_date" | "status" | "rating" | "under_analysis" | "price" | "payment_date" | "payment_status" | "wily_recommendation_id" | "price_recomendation" | "cisp1_session_id" | "rank_id" | "offer_id" | "soft_pad_session_id" | "created_at" | "updated_at";
export type willy_requestsCreationAttributes = Optional<willy_requestsAttributes, willy_requestsOptionalAttributes>;

export class willy_requests extends Model<willy_requestsAttributes, willy_requestsCreationAttributes> implements willy_requestsAttributes {
  id!: number;
  operator_id?: number;
  wily_id?: number;
  order_of_service_id?: number;
  start_inspection_date?: Date;
  end_inspection_date?: Date;
  status?: 'aguardando' | 'iniciada' | 'concluida' | 'cancelada';
  rating?: number;
  under_analysis?: number;
  price?: number;
  payment_date?: Date;
  payment_status?: number;
  wily_recommendation_id?: number;
  price_recomendation?: number;
  cisp1_session_id?: string;
  rank_id?: number;
  offer_id?: number;
  soft_pad_session_id?: string;
  created_at!: Date;
  updated_at!: Date;

  // (métodos de associação omitidos para brevidade)

  static initModel(sequelize: Sequelize.Sequelize): typeof willy_requests {
    return willy_requests.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      operator_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'users', key: 'id' }
      },
      wily_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'willys', key: 'id' }
      },
      order_of_service_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'orders_of_service', key: 'id' }
      },
      start_inspection_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      end_inspection_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.ENUM('aguardando','iniciada','concluida','cancelada'),
        allowNull: true
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      under_analysis: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      price: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      payment_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      payment_status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "0 - Pendente, 1 - Pago"
      },
      wily_recommendation_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      price_recomendation: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      cisp1_session_id: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      rank_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      offer_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: { model: 'os_offers', key: 'id' }
      },
      soft_pad_session_id: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'willy_requests',
      timestamps: false,
      indexes: [
        { name: "PRIMARY", unique: true, using: "BTREE", fields: [ { name: "id" } ] },
        { name: "willyId", using: "BTREE", fields: [ { name: "wily_id" } ] },
        { name: "orderServiceId", using: "BTREE", fields: [ { name: "order_of_service_id" } ] },
        { name: "rank_id", using: "BTREE", fields: [ { name: "rank_id" } ] },
        { name: "operator_id", using: "BTREE", fields: [ { name: "operator_id" } ] },
        { name: "offer_id", using: "BTREE", fields: [ { name: "offer_id" } ] }
      ]
    });
  }
}
