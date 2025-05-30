import type { Sequelize } from "sequelize";
import { users as _users } from "./users";
import { willy_requests as _willy_requests } from "./willy_requests";
import { os_feedbacks as _os_feedbacks } from "./os_feedbacks";
import { orders_of_service as _orders_of_service } from "./orders_of_service";
import { customers as _customers } from "./customers";
import { execution_units as _execution_units } from "./execution_units";

export function initModels(sequelize: Sequelize) {
  const users = _users.initModel(sequelize);
  const willy_requests = _willy_requests.initModel(sequelize);
  const os_feedbacks = _os_feedbacks.initModel(sequelize);
  const orders_of_service = _orders_of_service.initModel(sequelize);
  const customers = _customers.initModel(sequelize);
  const execution_units = _execution_units.initModel(sequelize);

  // Relacionamentos essenciais
  willy_requests.belongsTo(orders_of_service, { as: "order_of_service", foreignKey: "order_of_service_id" });
  orders_of_service.hasMany(willy_requests, { as: "willy_requests", foreignKey: "order_of_service_id" });

  willy_requests.belongsTo(users, { as: "operator", foreignKey: "operator_id" });
  users.hasMany(willy_requests, { as: "willy_requests", foreignKey: "operator_id" });

  os_feedbacks.belongsTo(orders_of_service, { as: "order_of_service", foreignKey: "order_of_service_id" });
  orders_of_service.hasMany(os_feedbacks, { as: "os_feedbacks", foreignKey: "order_of_service_id" });

  orders_of_service.belongsTo(execution_units, { as: "execution_unit", foreignKey: "execution_unit_id" });
  execution_units.hasMany(orders_of_service, { as: "orders_of_services", foreignKey: "execution_unit_id" });

  execution_units.belongsTo(customers, { as: "customer", foreignKey: "customer_id" });
  customers.hasMany(execution_units, { as: "execution_units", foreignKey: "customer_id" });

  users.belongsTo(execution_units, { as: "execution_unit", foreignKey: "execution_unit_id" });
  execution_units.hasMany(users, { as: "users", foreignKey: "execution_unit_id" });

  return {
    users,
    willy_requests,
    os_feedbacks,
    orders_of_service,
    customers,
    execution_units
  };
}
