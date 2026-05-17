const profileService = require("./profile.service");

const getProfileController = async (req, res) => {
  try {
    const result = await profileService.getProfile(req.user.userId);

    res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const addAddressController = async (req, res) => {
  try {
    const result = await profileService.addAddress(req.user.userId, req.body);

    res.status(200).json({
      success: true,
      message: "Address added successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getProfileController,
  addAddressController,
};
