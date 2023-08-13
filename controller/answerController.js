const asyncHandler = require("express-async-handler");
const Answer = require("../Model/answerModel");

const getAnswer = asyncHandler(async (request, response, next) => {
  const answer = await Answer.find();

  response.status(200).json(answer);
});

const createAnswer = asyncHandler(async (request, response, next) => {
  const answer = await Answer.create({
    Answer: request.body.answer,
    Question_id: request.body.question_id,
    Person_id: request.body.person_id,
  });

  response
    .status(200)
    .json({ responseCode: 1, responseMsg: " submitted successfylly" });
  //  getRegResponse(false, "Registration Successful");
});

const updateAnswer = asyncHandler(async (request, response, next) => {
  response.status(200).json({ messgae: "update goals" });
});

const deleteAnswer = asyncHandler(async (request, response, next) => {
  response.status(200).json({ messgae: "delete goals" });
});

module.exports = { getAnswer, createAnswer, updateAnswer, deleteAnswer };
