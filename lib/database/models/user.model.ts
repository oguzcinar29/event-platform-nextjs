import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, requried: true, unique: true },
  email: { type: String, requried: true, unique: true },
  username: { type: String, requried: true, unique: true },
  firstName: { type: String, requried: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
});

const User = models.User || model("User", UserSchema);

export default User;
