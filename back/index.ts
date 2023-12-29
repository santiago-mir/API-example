import * as express from "express";
import { sequelize } from "./db";
import { User } from "./models/models";
import * as path from "path";
import { sync } from "./db/sync";
import { UserController } from "./controllers/user-controller";
const app = express();
app.use(express.json());
const port = 3002;
// sync();
app.post("/profile", async (req, res) => {
  const { name, bio, imgData } = req.body;
  const createUser = await UserController.createUser(name, bio, imgData);
  res.json({ message: "user creado", createUser });
});

app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  const route = path.resolve(__dirname, "../dist/index.html");
  res.sendFile(route);
});

app.listen(port, () => console.log("escuchando puerto" + port));
