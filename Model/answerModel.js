const mongoose = require("mongoose");

const answerSchema = mongoose.Schema(
  {
    Answer: {
      type: String,
      required: [true, "Please enter a value"],
    },
    Questionid: {
      type: String,
      required: [true, "Please enter a value"],
    },
    Personid: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("answer", answerSchema);
