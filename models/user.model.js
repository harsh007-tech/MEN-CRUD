const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    username: { type: String, required: [true, "Please Enter the username"],unique: true },
    password: { type: String, required: [true, "Please Enter the password"] },
    email: { type: String, required: [true, "Please enter your email"],unique: true },
    age: { type: Number, required: true },
    amount: { type: Number, required: true, default: 0 },
    image: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User",UserSchema);
module.exports = User;