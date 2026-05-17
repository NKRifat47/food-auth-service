const bcrypt = require("bcrypt");

const prisma = require("../../config/prisma");
const { generateToken } = require("../../utils/jwt");

const registerUser = async (payload) => {
  const { name, email, password } = payload;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const token = generateToken({
    userId: user.id,
    role: user.role,
  });

  return {
    user,
    token,
  };
};

const loginUser = async (payload) => {
  const { email, password } = payload;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({
    userId: user.id,
    role: user.role,
  });

  return {
    user,
    token,
  };
};

module.exports = {
  registerUser,
  loginUser,
};
