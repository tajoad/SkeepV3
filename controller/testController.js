const asyncHandler = require("express-async-handler");
const Test = require("../Model/testModel");

const getTest = asyncHandler(async (request, response, next) => {
  const test = await Test.find();

  response.status(200).json(test);
});

const setTest = asyncHandler(async (request, response, next) => {
  if (!request.body.text) {
    response.status(400);
    throw new Error("Please input a text");
  }
  const test = await Test.create({
    text: request.body.text,
  });
  response.status(200).json(test);
});

const updateTest = asyncHandler(async (request, response, next) => {
  response.status(200).json({ messgae: "update goals" });
});

const deleteTest = asyncHandler(async (request, response, next) => {
  response.status(200).json({ messgae: "delete goals" });
});

module.exports = { getTest, setTest, updateTest, deleteTest };
