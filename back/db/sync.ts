import { sequelize } from "./index";
function sync() {
  sequelize.sync({ force: true });
}

export { sync };
