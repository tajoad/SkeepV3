const mongoose = require("mongoose");

const answerSchema = mongoose.Schema(
  {
    Answer: {
      type: String,
      required: [true, "Please enter a value"],
    },
    Question_id: {
      type: String,
      required: [true, "Please enter a value"],
    },
    Person_id: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("answer", answerSchema);
