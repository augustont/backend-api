import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bonus_campaign_wilys, bonus_campaign_wilysId } from './bonus_campaign_wilys';
import type { os_offers, os_offersId } from './os_offers';
import type { payment_bonnus, payment_bonnusId } from './payment_bonnus';
import type { payment_indications, payment_indicationsId } from './payment_indications';
import type { precifications, precificationsId } from './precifications';
import type { willy_requests, willy_requestsId } from './willy_requests';
import type { willys_mapping, willys_mappingId } from './willys_mapping';
import type { willys_segmentations, willys_segmentationsId } from './willys_segmentations';

export interface willysAttributes {
  id: number;
  full_name: string;
  city?: string;
  district?: string;
  address?: string;
  email?: string;
  whatsapp?: string;
  doc_number?: string;
  doc_type?: 'cpf' | 'rg' | 'cnh' | 'outro';
  latitude?: string;
  logintude?: string;
  last_seen_at?: Date;
  accuracy?: number;
  is_mobile?: number;
  photo_url?: string;
  status?: 'online' | 'offline';
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  referral_by_id?: string;
  pix?: string;
  pix_type?: string;
  profession?: string;
  origin?: string;
  token?: string;
  benefits_at?: Date;
  benefits_status?: string;
}

export type willysPk = "id";
export type willysId = willys[willysPk];
export type willysOptionalAttributes = "id" | "city" | "district" | "address" | "email" | "whatsapp" | "doc_number" | "doc_type" | "latitude" | "logintude" | "last_seen_at" | "accuracy" | "is_mobile" | "photo_url" | "status" | "created_at" | "updated_at" | "deleted_at" | "referral_by_id" | "pix" | "pix_type" | "profession" | "origin" | "token" | "benefits_at" | "benefits_status";
export type willysCreationAttributes = Optional<willysAttributes, willysOptionalAttributes>;

export class willys extends Model<willysAttributes, willysCreationAttributes> implements willysAttributes {
  id!: number;
  full_name!: string;
  city?: string;
  district?: string;
  address?: string;
  email?: string;
  whatsapp?: string;
  doc_number?: string;
  doc_type?: 'cpf' | 'rg' | 'cnh' | 'outro';
  latitude?: string;
  logintude?: string;
  last_seen_at?: Date;
  accuracy?: number;
  is_mobile?: number;
  photo_url?: string;
  status?: 'online' | 'offline';
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  referral_by_id?: string;
  pix?: string;
  pix_type?: string;
  profession?: string;
  origin?: string;
  token?: string;
  benefits_at?: Date;
  benefits_status?: string;

  // willys hasMany bonus_campaign_wilys via willy_id
  bonus_campaign_wilies!: bonus_campaign_wilys[];
  getBonus_campaign_wilies!: Sequelize.HasManyGetAssociationsMixin<bonus_campaign_wilys>;
  setBonus_campaign_wilies!: Sequelize.HasManySetAssociationsMixin<bonus_campaign_wilys, bonus_campaign_wilysId>;
  addBonus_campaign_wily!: Sequelize.HasManyAddAssociationMixin<bonus_campaign_wilys, bonus_campaign_wilysId>;
  addBonus_campaign_wilies!: Sequelize.HasManyAddAssociationsMixin<bonus_campaign_wilys, bonus_campaign_wilysId>;
  createBonus_campaign_wily!: Sequelize.HasManyCreateAssociationMixin<bonus_campaign_wilys>;
  removeBonus_campaign_wily!: Sequelize.HasManyRemoveAssociationMixin<bonus_campaign_wilys, bonus_campaign_wilysId>;
  removeBonus_campaign_wilies!: Sequelize.HasManyRemoveAssociationsMixin<bonus_campaign_wilys, bonus_campaign_wilysId>;
  hasBonus_campaign_wily!: Sequelize.HasManyHasAssociationMixin<bonus_campaign_wilys, bonus_campaign_wilysId>;
  hasBonus_campaign_wilies!: Sequelize.HasManyHasAssociationsMixin<bonus_campaign_wilys, bonus_campaign_wilysId>;
  countBonus_campaign_wilies!: Sequelize.HasManyCountAssociationsMixin;
  // willys hasMany os_offers via willy_id
  os_offers!: os_offers[];
  getOs_offers!: Sequelize.HasManyGetAssociationsMixin<os_offers>;
  setOs_offers!: Sequelize.HasManySetAssociationsMixin<os_offers, os_offersId>;
  addOs_offer!: Sequelize.HasManyAddAssociationMixin<os_offers, os_offersId>;
  addOs_offers!: Sequelize.HasManyAddAssociationsMixin<os_offers, os_offersId>;
  createOs_offer!: Sequelize.HasManyCreateAssociationMixin<os_offers>;
  removeOs_offer!: Sequelize.HasManyRemoveAssociationMixin<os_offers, os_offersId>;
  removeOs_offers!: Sequelize.HasManyRemoveAssociationsMixin<os_offers, os_offersId>;
  hasOs_offer!: Sequelize.HasManyHasAssociationMixin<os_offers, os_offersId>;
  hasOs_offers!: Sequelize.HasManyHasAssociationsMixin<os_offers, os_offersId>;
  countOs_offers!: Sequelize.HasManyCountAssociationsMixin;
  // willys hasMany payment_bonnus via willy_id
  payment_bonnus!: payment_bonnus[];
  getPayment_bonnus!: Sequelize.HasManyGetAssociationsMixin<payment_bonnus>;
  setPayment_bonnus!: Sequelize.HasManySetAssociationsMixin<payment_bonnus, payment_bonnusId>;
  addPayment_bonnu!: Sequelize.HasManyAddAssociationMixin<payment_bonnus, payment_bonnusId>;
  addPayment_bonnus!: Sequelize.HasManyAddAssociationsMixin<payment_bonnus, payment_bonnusId>;
  createPayment_bonnu!: Sequelize.HasManyCreateAssociationMixin<payment_bonnus>;
  removePayment_bonnu!: Sequelize.HasManyRemoveAssociationMixin<payment_bonnus, payment_bonnusId>;
  removePayment_bonnus!: Sequelize.HasManyRemoveAssociationsMixin<payment_bonnus, payment_bonnusId>;
  hasPayment_bonnu!: Sequelize.HasManyHasAssociationMixin<payment_bonnus, payment_bonnusId>;
  hasPayment_bonnus!: Sequelize.HasManyHasAssociationsMixin<payment_bonnus, payment_bonnusId>;
  countPayment_bonnus!: Sequelize.HasManyCountAssociationsMixin;
  // willys hasMany payment_indications via willy_id
  payment_indications!: payment_indications[];
  getPayment_indications!: Sequelize.HasManyGetAssociationsMixin<payment_indications>;
  setPayment_indications!: Sequelize.HasManySetAssociationsMixin<payment_indications, payment_indicationsId>;
  addPayment_indication!: Sequelize.HasManyAddAssociationMixin<payment_indications, payment_indicationsId>;
  addPayment_indications!: Sequelize.HasManyAddAssociationsMixin<payment_indications, payment_indicationsId>;
  createPayment_indication!: Sequelize.HasManyCreateAssociationMixin<payment_indications>;
  removePayment_indication!: Sequelize.HasManyRemoveAssociationMixin<payment_indications, payment_indicationsId>;
  removePayment_indications!: Sequelize.HasManyRemoveAssociationsMixin<payment_indications, payment_indicationsId>;
  hasPayment_indication!: Sequelize.HasManyHasAssociationMixin<payment_indications, payment_indicationsId>;
  hasPayment_indications!: Sequelize.HasManyHasAssociationsMixin<payment_indications, payment_indicationsId>;
  countPayment_indications!: Sequelize.HasManyCountAssociationsMixin;
  // willys hasMany precifications via willy_id
  precifications!: precifications[];
  getPrecifications!: Sequelize.HasManyGetAssociationsMixin<precifications>;
  setPrecifications!: Sequelize.HasManySetAssociationsMixin<precifications, precificationsId>;
  addPrecification!: Sequelize.HasManyAddAssociationMixin<precifications, precificationsId>;
  addPrecifications!: Sequelize.HasManyAddAssociationsMixin<precifications, precificationsId>;
  createPrecification!: Sequelize.HasManyCreateAssociationMixin<precifications>;
  removePrecification!: Sequelize.HasManyRemoveAssociationMixin<precifications, precificationsId>;
  removePrecifications!: Sequelize.HasManyRemoveAssociationsMixin<precifications, precificationsId>;
  hasPrecification!: Sequelize.HasManyHasAssociationMixin<precifications, precificationsId>;
  hasPrecifications!: Sequelize.HasManyHasAssociationsMixin<precifications, precificationsId>;
  countPrecifications!: Sequelize.HasManyCountAssociationsMixin;
  // willys hasMany willy_requests via wily_id
  willy_requests!: willy_requests[];
  getWilly_requests!: Sequelize.HasManyGetAssociationsMixin<willy_requests>;
  setWilly_requests!: Sequelize.HasManySetAssociationsMixin<willy_requests, willy_requestsId>;
  addWilly_request!: Sequelize.HasManyAddAssociationMixin<willy_requests, willy_requestsId>;
  addWilly_requests!: Sequelize.HasManyAddAssociationsMixin<willy_requests, willy_requestsId>;
  createWilly_request!: Sequelize.HasManyCreateAssociationMixin<willy_requests>;
  removeWilly_request!: Sequelize.HasManyRemoveAssociationMixin<willy_requests, willy_requestsId>;
  removeWilly_requests!: Sequelize.HasManyRemoveAssociationsMixin<willy_requests, willy_requestsId>;
  hasWilly_request!: Sequelize.HasManyHasAssociationMixin<willy_requests, willy_requestsId>;
  hasWilly_requests!: Sequelize.HasManyHasAssociationsMixin<willy_requests, willy_requestsId>;
  countWilly_requests!: Sequelize.HasManyCountAssociationsMixin;
  // willys hasMany willys_mapping via willy_id
  willys_mappings!: willys_mapping[];
  getWillys_mappings!: Sequelize.HasManyGetAssociationsMixin<willys_mapping>;
  setWillys_mappings!: Sequelize.HasManySetAssociationsMixin<willys_mapping, willys_mappingId>;
  addWillys_mapping!: Sequelize.HasManyAddAssociationMixin<willys_mapping, willys_mappingId>;
  addWillys_mappings!: Sequelize.HasManyAddAssociationsMixin<willys_mapping, willys_mappingId>;
  createWillys_mapping!: Sequelize.HasManyCreateAssociationMixin<willys_mapping>;
  removeWillys_mapping!: Sequelize.HasManyRemoveAssociationMixin<willys_mapping, willys_mappingId>;
  removeWillys_mappings!: Sequelize.HasManyRemoveAssociationsMixin<willys_mapping, willys_mappingId>;
  hasWillys_mapping!: Sequelize.HasManyHasAssociationMixin<willys_mapping, willys_mappingId>;
  hasWillys_mappings!: Sequelize.HasManyHasAssociationsMixin<willys_mapping, willys_mappingId>;
  countWillys_mappings!: Sequelize.HasManyCountAssociationsMixin;
  // willys hasMany willys_segmentations via willyId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof willys {
    return willys.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    district: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    whatsapp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    doc_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doc_type: {
      type: DataTypes.ENUM('cpf','rg','cnh','outro'),
      allowNull: true
    },
    latitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    logintude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_seen_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    accuracy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_mobile: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    photo_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('online','offline'),
      allowNull: true,
      defaultValue: "offline"
    },
    referral_by_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pix: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pix_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    profession: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    origin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    benefits_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    benefits_status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "inactive"
    }
  }, {
    sequelize,
    tableName: 'willys',
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
