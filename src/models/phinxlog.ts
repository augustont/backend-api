import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface phinxlogAttributes {
  version: number;
  migration_name?: string;
  start_time?: Date;
  end_time?: Date;
  breakpoint: number;
}

export type phinxlogPk = "version";
export type phinxlogId = phinxlog[phinxlogPk];
export type phinxlogOptionalAttributes = "migration_name" | "start_time" | "end_time" | "breakpoint";
export type phinxlogCreationAttributes = Optional<phinxlogAttributes, phinxlogOptionalAttributes>;

export class phinxlog extends Model<phinxlogAttributes, phinxlogCreationAttributes> implements phinxlogAttributes {
  version!: number;
  migration_name?: string;
  start_time?: Date;
  end_time?: Date;
  breakpoint!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof phinxlog {
    return phinxlog.init({
    version: {
      type: DataTypes.BIGINT,
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
    migration_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    breakpoint: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'phinxlog',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "version" },
        ]
      },
    ],
  });
  }
}
