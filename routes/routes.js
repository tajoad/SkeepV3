const express = require("express");
const router = express.Router();

// sample routes
const {
  getTest,
  setTest,
  updateTest,
  deleteTest,
} = require("../controller/testController");

// get and post routes
router.route("/").get(getTest).post(setTest);

// update and delete routes
router.route("/:id").put(updateTest).delete(deleteTest);

// user routes
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/usersController");

// get and post users routes
router.route("/api/skeepuser").post(getUser).post(createUser);

//uodate and delete user routes
router.route("/api/skeepuser/:id").put(updateUser).delete(deleteUser);

module.exports = router;
