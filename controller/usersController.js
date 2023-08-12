const asyncHandler = require("express-async-handler");
const User = require("../Model/userModel");

const getUser = asyncHandler(async (request, response, next) => {
  const user = await User.find();

  response.status(200).json(user);
});

const createUser = asyncHandler(async (request, response, next) => {
  const bcrypt = require("bcrypt");

  const passwordHash = bcrypt.hashSync(request.body.password, 10);

  if (
    !request.body.email &&
    !request.body.password &&
    !request.body.confirmPassword
  ) {
    response.status(400);
    throw new Error("Please input a value");
  }
  const getSignupUser = await User.find({
    email: request.body.email,
  }).exec();

  if (getSignupUser.length > 0) {
    response.status(400).json({
      responseCode: 0,
      responseMsg: "You already have an account. Kindly Login",
    });
    /*getRegResponse(
      new Error("You already have an account. Kindly Login"),
      null
    );*/
  } else {
    //insert into table and send response
    const user = await User.create({
      email: request.body.email,
      password: passwordHash,
      confirmPassword: passwordHash,
      dateOfBirth: request.body.dateOfBirth,
      gender: request.body.gender,
    });
    response
      .status(200)
      .json({ responseCode: 1, responseMsg: "Registration Successful" });
    //  getRegResponse(false, "Registration Successful");
  }
});

const updateUser = asyncHandler(async (request, response, next) => {
  response.status(200).json({ messgae: "update goals" });
});

const deleteUser = asyncHandler(async (request, response, next) => {
  response.status(200).json({ messgae: "delete goals" });
});

module.exports = { getUser, createUser, updateUser, deleteUser };
