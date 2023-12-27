import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";

export class Product extends Model {}
Product.init(
  {
    title: { type: DataTypes.STRING },
    value: { type: DataTypes.INTEGER },
    stock: { type: DataTypes.INTEGER },
    envioGratis: { type: DataTypes.BOOLEAN },
  },
  {
    sequelize,
    modelName: "product",
  }
);
