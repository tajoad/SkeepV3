const asyncHandler = require("express-async-handler");
const User = require("../Model/userModel");

const getUser = asyncHandler(async (request, response, next) => {
  const user = await User.find();

  response.status(200).json(user);
});

const createUser = asyncHandler(async (request, response, next) => {
  if (!request.body.email && !request.body.password && !request.body.confirmPassword) {
    response.status(400);
    throw new Error("Please input a value");
  }
  const user = await User.create({
    email: request.body.email,
    password: request.body.password,
    confirmPassword: request.body.confirmPassword,
    dateOfBirth : request.body.dateOfBirth,
    gender: request.body.gender
  });
  response.status(200).json(user);
});

const updateUser = asyncHandler(async (request, response, next) => {
  response.status(200).json({ messgae: "update goals" });
});

const deleteUser = asyncHandler(async (request, response, next) => {
  response.status(200).json({ messgae: "delete goals" });
});

module.exports = { getUser, createUser, updateUser, deleteUser };
