const profileService = require("../services/profile.service");

const getProfile = async (req, res) => {
  try {
    const result = await profileService.getProfile(req.user.userId);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const addAddress = async (req, res) => {
  try {
    const result = await profileService.addAddress(req.user.userId, req.body);

    res.status(201).json({
      success: true,
      message: "Address added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getProfile,
  addAddress,
};
