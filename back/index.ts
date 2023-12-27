import * as express from "express";
import { sequelize } from "./db";
import { User, Product } from "./db/models";
import * as path from "path";

const app = express();
app.use(express.json());
const port = 3002;
// sequelize.sync({ force: true });

// app.post("/create", async (req, res) => {
//   const title: string = req.body.title;
//   const value: number = req.body.value;
//   const stock: number = req.body.stock;
//   const envioGratis: boolean = req.body.envioGratis;
//   const newProduct = await Product.create({
//     title: title,
//     value: value,
//     stock: stock,
//     envioGratis: envioGratis,
//   });
//   res.json({ message: "product CREADO", newProduct: newProduct.toJSON() });
// });

app.get("/test", async (req, res) => {
  // const user = await User.create({
  //   username: "Santi",
  // });
  const product = await Product.create({
    title: "Mate",
    price: 200,
    userId: 1,
  });
  res.json(product);
});
// app.get("/products", async (req, res) => {
//   const allProducts = await Product.findAll();
//   res.json(allProducts);
// });
// app.get("/products/:productId", async (req, res) => {
//   const { productId } = req.params;
//   const product = await Product.findByPk(productId);
//   res.json(product);
// });
// app.patch("/update/:productId", async (req, res) => {
//   const { productId } = req.params;
//   const obj = req.body;
//   let index = 0;
//   while (index == 0) {
//     for (const key in obj) {
//       const product = await Product.update(
//         { [key]: obj[key] },
//         {
//           where: {
//             id: productId,
//           },
//         }
//       );
//     }
//     index++;
//   }
//   const updatedProduct = await Product.findByPk(productId);
//   res.json(updatedProduct);
// });

// app.delete("/delete/:productId", async (req, res) => {
//   const { productId } = req.params;
//   await Product.destroy({
//     where: {
//       id: productId,
//     },
//   });
//   res.json("producto eliminado correctamente");
// });
app.get("*", (req, res) => {
  const route = path.resolve(__dirname, "../front-dist/index.html");
  res.sendFile(route);
});

app.listen(port, () => console.log("escuchando puerto" + port));
