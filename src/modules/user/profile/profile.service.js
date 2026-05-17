const prisma = require("../../../config/prisma");

const getProfile = async (userId) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });
};

const addAddress = async (userId, payload) => {
  return await prisma.userAddress.create({
    data: {
      userId,
      ...payload,
    },
  });
};

module.exports = {
  getProfile,
  addAddress,
};
