const asyncHandler = require("express-async-handler");
const Answer = require("../Model/answerModel");

const getAnswer = asyncHandler(async (request, response, next) => {
  const answer = await Answer.find();

  response.status(200).json(answer);
});

const createAnswer = asyncHandler(async (request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  response.setHeader("Access-Control-Allow-Credentials", true); // you
  response.setHeader("Content-Type", "application/json");

  console.log(request.body);
  const answer = Answer.create(request.body);
  response
    .status(200)
    .json({ responseCode: 1, responseMsg: " submitted successfully" });
  //  getRegResponse(false, "Registration Successful")
  console.log(answer);
});

const updateAnswer = asyncHandler(async (request, response, next) => {
  response.status(200).json({ messgae: "update goals" });
});

const deleteAnswer = asyncHandler(async (request, response, next) => {
  response.status(200).json({ messgae: "delete goals" });
});

module.exports = { getAnswer, createAnswer, updateAnswer, deleteAnswer };
