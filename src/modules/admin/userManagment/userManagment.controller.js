const userService = require("./userManagment.service");
const sendResponse = require("../../../utils/sendResponse");

const getAllUsers = async (req, res) => {
  try {
    const result = await userService.getAllUsers();

    sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Users fetched successfully",
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

const getUserById = async (req, res) => {
  try {
    const result = await userService.getUserById(req.params.id);

    sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "User fetched successfully",
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

const deleteUserById = async (req, res) => {
  try {
    const result = await userService.deleteUserById(req.params.id);

    sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "User deleted successfully",
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

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
};
