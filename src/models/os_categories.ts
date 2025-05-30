import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { orders_of_service, orders_of_serviceId } from './orders_of_service';

export interface os_categoriesAttributes {
  id: number;
  description?: string;
  alt_description?: string;
  type?: string;
  price?: number;
  created_at: Date;
  updated_at: Date;
}

export type os_categoriesPk = "id";
export type os_categoriesId = os_categories[os_categoriesPk];
export type os_categoriesOptionalAttributes = "id" | "description" | "alt_description" | "type" | "price" | "created_at" | "updated_at";
export type os_categoriesCreationAttributes = Optional<os_categoriesAttributes, os_categoriesOptionalAttributes>;

export class os_categories extends Model<os_categoriesAttributes, os_categoriesCreationAttributes> implements os_categoriesAttributes {
  id!: number;
  description?: string;
  alt_description?: string;
  type?: string;
  price?: number;
  created_at!: Date;
  updated_at!: Date;

  // os_categories hasMany orders_of_service via os_category_id
  orders_of_services!: orders_of_service[];
  getOrders_of_services!: Sequelize.HasManyGetAssociationsMixin<orders_of_service>;
  setOrders_of_services!: Sequelize.HasManySetAssociationsMixin<orders_of_service, orders_of_serviceId>;
  addOrders_of_service!: Sequelize.HasManyAddAssociationMixin<orders_of_service, orders_of_serviceId>;
  addOrders_of_services!: Sequelize.HasManyAddAssociationsMixin<orders_of_service, orders_of_serviceId>;
  createOrders_of_service!: Sequelize.HasManyCreateAssociationMixin<orders_of_service>;
  removeOrders_of_service!: Sequelize.HasManyRemoveAssociationMixin<orders_of_service, orders_of_serviceId>;
  removeOrders_of_services!: Sequelize.HasManyRemoveAssociationsMixin<orders_of_service, orders_of_serviceId>;
  hasOrders_of_service!: Sequelize.HasManyHasAssociationMixin<orders_of_service, orders_of_serviceId>;
  hasOrders_of_services!: Sequelize.HasManyHasAssociationsMixin<orders_of_service, orders_of_serviceId>;
  countOrders_of_services!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof os_categories {
    return os_categories.init({
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
    alt_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'os_categories',
    timestamps: false,
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
