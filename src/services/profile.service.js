const prisma = require("../config/prisma");

const getProfile = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      addresses: {
        select: {
          address: true,
          city: true,
          country: true,
        },
      },
    },
  });

  return user;
};

const addAddress = async (userId, address) => {
  const existingAddress = await prisma.userAddress.findFirst({
    where: { userId: userId },
  });

  if (existingAddress) {
    return await prisma.userAddress.update({
      where: { id: existingAddress.id },
      data: {
        address: address.address,
        city: address.city,
        country: address.country,
      },
    });
  }

  const newAddress = await prisma.userAddress.create({
    data: {
      userId: userId,
      address: address.address,
      city: address.city,
      country: address.country,
    },
  });

  return newAddress;
};

module.exports = {
  getProfile,
  addAddress,
};
