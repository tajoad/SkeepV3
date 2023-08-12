const mongoose = require("mongoose");

const testSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('test', testSchema);