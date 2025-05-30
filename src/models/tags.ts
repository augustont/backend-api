import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tagsAttributes {
  id: number;
  name: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type tagsPk = "id";
export type tagsId = tags[tagsPk];
export type tagsOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type tagsCreationAttributes = Optional<tagsAttributes, tagsOptionalAttributes>;

export class tags extends Model<tagsAttributes, tagsCreationAttributes> implements tagsAttributes {
  id!: number;
  name!: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tags {
    return tags.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "title"
    }
  }, {
    sequelize,
    tableName: 'tags',
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
        name: "title",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
  }
}
