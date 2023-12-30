import { User } from "../models/user";
import { cloudinary } from "../../lib/cloudinary";

class UserController {
  public static async createUser(
    name: string,
    bio: string,
    imgData: string
  ): Promise<User> {
    if (!name || !bio || !imgData) {
      throw new Error("faltan completar campos en el formulario");
    } else {
      const imgURL = await cloudinary.uploader.upload(imgData, {
        resource_type: "image",
        discard_original_filename: true,
        width: 1000,
      });
      const newUser = await User.create({
        userName: name,
        biography: bio,
        imgData: imgURL.secure_url,
      });
      return newUser;
    }
  }
}

export { UserController };
