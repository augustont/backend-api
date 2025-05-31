import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bonus_campaigns, bonus_campaignsId } from './bonus_campaigns';
import type { willys, willysId } from './willys';

export interface bonus_campaign_wilysAttributes {
  id: number;
  willy_id?: number;
  bonus_campaign_id?: number;
}

export type bonus_campaign_wilysPk = "id";
export type bonus_campaign_wilysId = bonus_campaign_wilys[bonus_campaign_wilysPk];
export type bonus_campaign_wilysOptionalAttributes = "id" | "willy_id" | "bonus_campaign_id";
export type bonus_campaign_wilysCreationAttributes = Optional<bonus_campaign_wilysAttributes, bonus_campaign_wilysOptionalAttributes>;

export class bonus_campaign_wilys extends Model<bonus_campaign_wilysAttributes, bonus_campaign_wilysCreationAttributes> implements bonus_campaign_wilysAttributes {
  id!: number;
  willy_id?: number;
  bonus_campaign_id?: number;

  // bonus_campaign_wilys belongsTo bonus_campaigns via bonus_campaign_id
  bonus_campaign!: bonus_campaigns;
  getBonus_campaign!: Sequelize.BelongsToGetAssociationMixin<bonus_campaigns>;
  setBonus_campaign!: Sequelize.BelongsToSetAssociationMixin<bonus_campaigns, bonus_campaignsId>;
  createBonus_campaign!: Sequelize.BelongsToCreateAssociationMixin<bonus_campaigns>;
  // bonus_campaign_wilys belongsTo willys via willy_id
  willy!: willys;
  getWilly!: Sequelize.BelongsToGetAssociationMixin<willys>;
  setWilly!: Sequelize.BelongsToSetAssociationMixin<willys, willysId>;
  createWilly!: Sequelize.BelongsToCreateAssociationMixin<willys>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bonus_campaign_wilys {
    return bonus_campaign_wilys.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
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
    willy_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'willys',
        key: 'id',
      }
    },
    bonus_campaign_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'bonus_campaigns',
        key: 'id',
      }
    }
  }, {
    sequelize,
    tableName: 'bonus_campaign_wilys',
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
        name: "willy_id",
        using: "BTREE",
        fields: [
          { name: "willy_id" },
        ],
      },
      {
        name: "bonus_campaign_id",
        using: "BTREE",
        fields: [
          { name: "bonus_campaign_id" },
        ],
      },
    ],
  });
  }
}
