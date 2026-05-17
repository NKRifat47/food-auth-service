const profileService = require("./profile.service");
const sendResponse = require("../../../utils/sendResponse");

const getProfileController = async (req, res) => {
  try {
    const result = await profileService.getProfile(req.user.userId);

    sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Profile fetched successfully",
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

const addAddressController = async (req, res) => {
  try {
    const result = await profileService.addAddress(req.user.userId, req.body);

    sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Address added successfully",
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
  getProfileController,
  addAddressController,
};
