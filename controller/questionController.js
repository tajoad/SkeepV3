const asyncHandler = require("express-async-handler");
const Question = require("../Model/questionModel");

const getQuestion = asyncHandler(async (request, response, next) => {
  const question = await Question.find();

  response.status(200).json(question);
});

const createQuestion = asyncHandler(async (request, response, next) => {
  const question = await Question.create({
    Question: request.body.question,
    Q_id: request.body.id,
  });

  response
    .status(200)
    .json({ responseCode: 1, responseMsg: " submitted successfylly" });
  //  getRegResponse(false, "Registration Successful");
});

const updateQuestion = asyncHandler(async (request, response, next) => {
  response.status(200).json({ messgae: "update goals" });
});

const deleteQuestion = asyncHandler(async (request, response, next) => {
  console.log(request.params.id);
  const question = Question.deleteOne({ _id: request.params.id });
  response.status(200).json({ messgae: "delete goals" });
});

module.exports = {
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
