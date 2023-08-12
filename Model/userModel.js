const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please add a value"],
    },
    password: {
      type: String,
      required: [true, "Please enter a value"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Please enter a value"],
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
