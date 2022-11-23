const User = require("../models/userModel");

const login = async (email) => {
  return await User.findOne({ email });
};

const register = async (name, email, password, displayName) => {
  const newUser = new User({ name, email, password, displayName });
  await newUser.save();
};
const findUser = async (id) => {
  return await User.findById(id);
};

module.exports = {
  login,
  register,
  findUser,
};
