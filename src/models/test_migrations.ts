import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface test_migrationsAttributes {
  id: number;
  name?: string;
}

export type test_migrationsPk = "id";
export type test_migrationsId = test_migrations[test_migrationsPk];
export type test_migrationsOptionalAttributes = "id" | "name";
export type test_migrationsCreationAttributes = Optional<test_migrationsAttributes, test_migrationsOptionalAttributes>;

export class test_migrations extends Model<test_migrationsAttributes, test_migrationsCreationAttributes> implements test_migrationsAttributes {
  id!: number;
  name?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof test_migrations {
    return test_migrations.init({
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
  }, {
    sequelize,
    tableName: 'test_migrations',
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
