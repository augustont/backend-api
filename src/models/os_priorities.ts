import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { orders_of_service, orders_of_serviceId } from './orders_of_service';

export interface os_prioritiesAttributes {
  id: number;
  name?: string;
  level?: number;
  created_at: Date;
  updated_at?: Date;
}

export type os_prioritiesPk = "id";
export type os_prioritiesId = os_priorities[os_prioritiesPk];
export type os_prioritiesOptionalAttributes = "id" | "name" | "level" | "created_at" | "updated_at";
export type os_prioritiesCreationAttributes = Optional<os_prioritiesAttributes, os_prioritiesOptionalAttributes>;

export class os_priorities extends Model<os_prioritiesAttributes, os_prioritiesCreationAttributes> implements os_prioritiesAttributes {
  id!: number;
  name?: string;
  level?: number;
  created_at!: Date;
  updated_at?: Date;

  // os_priorities hasMany orders_of_service via priority_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof os_priorities {
    return os_priorities.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'os_priorities',
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
