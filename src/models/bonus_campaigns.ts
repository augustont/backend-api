import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bonus_campaign_wilys, bonus_campaign_wilysId } from './bonus_campaign_wilys';

export interface bonus_campaignsAttributes {
  id: number;
  name?: string;
  type?: string;
  quantity_inspections?: number;
  bonus_amount?: number;
  start_date?: string;
  final_date?: string;
  status?: string;
  deleted_at?: Date;
}

export type bonus_campaignsPk = "id";
export type bonus_campaignsId = bonus_campaigns[bonus_campaignsPk];
export type bonus_campaignsOptionalAttributes = "id" | "name" | "type" | "quantity_inspections" | "bonus_amount" | "start_date" | "final_date" | "status" | "deleted_at";
export type bonus_campaignsCreationAttributes = Optional<bonus_campaignsAttributes, bonus_campaignsOptionalAttributes>;

export class bonus_campaigns extends Model<bonus_campaignsAttributes, bonus_campaignsCreationAttributes> implements bonus_campaignsAttributes {
  id!: number;
  name?: string;
  type?: string;
  quantity_inspections?: number;
  bonus_amount?: number;
  start_date?: string;
  final_date?: string;
  status?: string;
  created_at!: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // bonus_campaigns hasMany bonus_campaign_dispatchs via bonus_campaign_id
  bonus_campaign_dispatches!: bonus_campaign_dispatchs[];
  getBonus_campaign_dispatches!: Sequelize.HasManyGetAssociationsMixin<bonus_campaign_dispatchs>;
  setBonus_campaign_dispatches!: Sequelize.HasManySetAssociationsMixin<bonus_campaign_dispatchs, bonus_campaign_dispatchsId>;
  addBonus_campaign_dispatch!: Sequelize.HasManyAddAssociationMixin<bonus_campaign_dispatchs, bonus_campaign_dispatchsId>;
  addBonus_campaign_dispatches!: Sequelize.HasManyAddAssociationsMixin<bonus_campaign_dispatchs, bonus_campaign_dispatchsId>;
  createBonus_campaign_dispatch!: Sequelize.HasManyCreateAssociationMixin<bonus_campaign_dispatchs>;
  removeBonus_campaign_dispatch!: Sequelize.HasManyRemoveAssociationMixin<bonus_campaign_dispatchs, bonus_campaign_dispatchsId>;
  removeBonus_campaign_dispatches!: Sequelize.HasManyRemoveAssociationsMixin<bonus_campaign_dispatchs, bonus_campaign_dispatchsId>;
  hasBonus_campaign_dispatch!: Sequelize.HasManyHasAssociationMixin<bonus_campaign_dispatchs, bonus_campaign_dispatchsId>;
  hasBonus_campaign_dispatches!: Sequelize.HasManyHasAssociationsMixin<bonus_campaign_dispatchs, bonus_campaign_dispatchsId>;
  countBonus_campaign_dispatches!: Sequelize.HasManyCountAssociationsMixin;
  // bonus_campaigns hasMany bonus_campaign_wilys via bonus_campaign_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof bonus_campaigns {
    return bonus_campaigns.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    quantity_inspections: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    bonus_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    final_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true,
    }
  }, {
    sequelize,
    tableName: 'bonus_campaigns',
    timestamps: true,
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
    ],
  });
  }
}
