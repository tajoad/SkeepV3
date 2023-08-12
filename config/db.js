const mongoose = require("mongoose");
const dotenv = require("dotenv");

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
