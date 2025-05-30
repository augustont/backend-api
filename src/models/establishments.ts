import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface establishmentsAttributes {
  id: number;
  description?: string;
  owner_name?: string;
  phone_number?: string;
  doc_type?: string;
  doc_number?: string;
  pix?: string;
  address?: string;
  category?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type establishmentsPk = "id";
export type establishmentsId = establishments[establishmentsPk];
export type establishmentsOptionalAttributes = "id" | "description" | "owner_name" | "phone_number" | "doc_type" | "doc_number" | "pix" | "address" | "category" | "created_at" | "updated_at" | "deleted_at";
export type establishmentsCreationAttributes = Optional<establishmentsAttributes, establishmentsOptionalAttributes>;

export class establishments extends Model<establishmentsAttributes, establishmentsCreationAttributes> implements establishmentsAttributes {
  id!: number;
  description?: string;
  owner_name?: string;
  phone_number?: string;
  doc_type?: string;
  doc_number?: string;
  pix?: string;
  address?: string;
  category?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof establishments {
    return establishments.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    owner_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    doc_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    doc_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pix: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'establishments',
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
