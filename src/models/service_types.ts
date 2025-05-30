import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { orders_of_service, orders_of_serviceId } from './orders_of_service';
import type { service_categories, service_categoriesId } from './service_categories';

export interface service_typesAttributes {
  id: number;
  category_id?: number;
  name?: string;
  deleted_at?: Date;
  created_at: Date;
  updated_at?: Date;
}

export type service_typesPk = "id";
export type service_typesId = service_types[service_typesPk];
export type service_typesOptionalAttributes = "id" | "category_id" | "name" | "deleted_at" | "created_at" | "updated_at";
export type service_typesCreationAttributes = Optional<service_typesAttributes, service_typesOptionalAttributes>;

export class service_types extends Model<service_typesAttributes, service_typesCreationAttributes> implements service_typesAttributes {
  id!: number;
  category_id?: number;
  name?: string;
  deleted_at?: Date;
  created_at!: Date;
  updated_at?: Date;

  // service_types belongsTo service_categories via category_id
  category!: service_categories;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<service_categories>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<service_categories, service_categoriesId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<service_categories>;
  // service_types hasMany orders_of_service via service_type_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof service_types {
    return service_types.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'service_categories',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'service_types',
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
        name: "category_id",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
  }
}
