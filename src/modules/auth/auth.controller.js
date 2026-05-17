const authService = require("./auth.service");
const sendResponse = require("../../utils/sendResponse");

const register = async (req, res) => {
  try {
    const result = await authService.registerUser(req.body);

    sendResponse({
      res,
      statusCode: 201,
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    sendResponse({
      res,
      statusCode: 400,
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const result = await authService.loginUser(req.body);

    sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    sendResponse({
      res,
      statusCode: 401,
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};
