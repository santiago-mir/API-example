import { User } from "../models/user";

class UserController {
  public static async createUser(
    name: string,
    bio: string,
    imgData: string
  ): Promise<User> {
    if (!name || !bio || !imgData) {
      throw new Error("faltan datos, completar el formulario");
    }
    const newUser = await User.create({
      userName: name,
      biography: bio,
      imgData: imgData,
    });
    return newUser;
  }
}

export { UserController };
