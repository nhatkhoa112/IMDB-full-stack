const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    name: { type: String, required: false, unique: false, default: "" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false, unique: false },
    avatarUrl: { type: String, required: false, default: "" },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);
module.exports = User;
