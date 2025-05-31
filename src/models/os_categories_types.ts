import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface os_categories_typesAttributes {
  id: number;
  name?: string;
  value?: string;
  created_at?: Date;
}

export type os_categories_typesPk = "id";
export type os_categories_typesId = os_categories_types[os_categories_typesPk];
export type os_categories_typesOptionalAttributes = "id" | "name" | "value" | "created_at";
export type os_categories_typesCreationAttributes = Optional<os_categories_typesAttributes, os_categories_typesOptionalAttributes>;

export class os_categories_types extends Model<os_categories_typesAttributes, os_categories_typesCreationAttributes> implements os_categories_typesAttributes {
  id!: number;
  name?: string;
  value?: string;
  created_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof os_categories_types {
    return os_categories_types.init({
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true,
    }
  }, {
    sequelize,
    tableName: 'os_categories_types',
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
    ],
  });
  }
}
