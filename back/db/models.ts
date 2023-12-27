import { User } from "./user";
import { Product } from "./products";

User.hasMany(Product);
Product.belongsTo(User);

export { User, Product };
