import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";

export class User extends Model {}
User.init(
  {
    userName: { type: DataTypes.STRING },
    birthday: { type: DataTypes.DATE },
    lastName: { type: DataTypes.STRING },
    unDato: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: "user",
  }
);
