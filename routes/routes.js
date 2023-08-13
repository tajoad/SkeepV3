const express = require("express");
const router = express.Router();
const {
  getTest,
  setTest,
  updateTest,
  deleteTest,
} = require("../controller/testController");

const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/usersController");

const {
  createAnswer,
  updateAnswer,
  deleteAnswer,
  getAnswer,
} = require("../controller/answerController");

// get and post routes
router.route("/").get(getTest).post(setTest);

// update and delete routes
router.route("/:id").put(updateTest).delete(deleteTest);

// user routes

// get and post users routes
router.route("/api/skeepuser").post(getUser).post(createUser);

//uodate and delete user routes
router.route("/api/skeepuser/:id").put(updateUser).delete(deleteUser);

// get and post users routes
router.route("/api/skeepanswer").get(getAnswer).post(createAnswer);

//uodate and delete user routes
router.route("/api/skeepanswer/:id").put(updateAnswer).delete(deleteAnswer);

module.exports = router;

//answer controller
