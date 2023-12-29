import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/index";

export class User extends Model {}
User.init(
  {
    userName: { type: DataTypes.STRING },
    biography: { type: DataTypes.STRING },
    imgData: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: "user",
  }
);
