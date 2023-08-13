const asyncHandler = require("express-async-handler");
const User = require("../Model/userModel");
const Answer = require("../Model/answerModel");
const bcrypt = require("bcrypt");

const getUser = asyncHandler(async (request, response, next) => {
  if (!request.body.email && !request.body.password) {
    response.status(400);
    throw new Error("Please input a value");
  }

  const getSignupUser = await User.find({
    email: request.body.email,
  });
  if (getSignupUser.length == 0) {
    response.json({
      responseCode: 0,
      responseMsg: "Email address does not exist",
      respSubmitted: false,
    });
    /*getRegResponse(
      new Error("You already have an account. Kindly Login"),
      null
    );*/
  } else {
    //insert into table and send response
    const hashedPassword = getSignupUser[0].password;
    const _response = bcrypt.compareSync(request.body.password, hashedPassword);

    if (_response == false) {
      response.json({
        responseCode: 0,
        responseMsg: "Incorrect Password",
        respSubmitted: false,
      });
    } else {
      const getUserAnswers = await Answer.find({
        _id: request.body._id,
      }).exec();

      if (getUserAnswers.length == 0) {
        response.status(200).json({
          responseCode: 1,
          responseMsg: getSignupUser[0]._id,
          respSubmitted: false,
        });
      } else {
        response.status(200).json({
          responseCode: 1,
          responseMsg: getSignupUser[0]._id,
          respSubmitted: true,
        });
      }
    }
    /* response
      .status(200)
      .json({ responseCode: 1, responseMsg: "Registration Successful" });*/
    //  getRegResponse(false, "Registration Successful");
  }
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
    response.json({
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
