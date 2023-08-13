const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {
    Question: {
      type: String,
      required: [true, "Please enter a value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("question", questionSchema);
