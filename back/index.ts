import * as express from "express";
import { sequelize } from "./db";
import { User } from "./models/models";
import * as cors from "cors";
import * as path from "path";
import { sync } from "./db/sync";
import { UserController } from "./controllers/user-controller";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
const port = 3002;
// sync();
app.post("/profile", async (req, res) => {
  const { nameValue, bioValue, imgData } = req.body;
  const newUser = await UserController.createUser(nameValue, bioValue, imgData);
  res.json(newUser);
});

app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  const route = path.resolve(__dirname, "../dist/index.html");
  res.sendFile(route);
});

app.listen(port, () => console.log("escuchando puerto" + port));
