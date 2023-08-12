const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const cookieparser = require("cookie-parser");
const connectDB = require("./config/db");
const port = process.env.port || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieparser());

app.listen(port, () => console.log(`Server started on port ${port}`));

app.use(cors());

app.use(function (req, res, next) {
  next();
});

app.use("/", routes);

app.use(errorHandler);

module.exports = app;
