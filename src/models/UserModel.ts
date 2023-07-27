import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      default: "USER",
      enum: ["USER", "ADMIN"],
    },
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
