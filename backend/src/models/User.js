import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      minlegth: 6,
    },
    role: {
      type: String,
      enum: ["user", "merchant", "admin"],
      default: "user",
    },
    phone: {
      type: String,
    },
    address: {
      city: String,
      country: String,
      postalCode: String,
    },
    profilePicture: String,
    isVerified: {
      type: Boolean,
      default: false,
    },
    refreshToken: String,
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
