import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: 2
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6
    },

    role: {
      type: String,
      enum: ["user", "owner", "admin"],
      default: "user"
    },

    phone: {
      type: String,
      trim: true
    },

    isVerified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

export default User;