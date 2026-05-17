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
  const existingAddress = await prisma.userAddress.findFirst({
    where: { userId },
  });

  if (existingAddress) {
    return await prisma.userAddress.update({
      where: { id: existingAddress.id },
      data: {
        ...payload,
      },
    });
  }

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
