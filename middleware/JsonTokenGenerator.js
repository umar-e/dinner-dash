const jwt = require("jsonwebtoken");
const tokenGenerator = (user) => {
  return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};
const refreshTokenGenerator = (userId) => {
  return jwt.sign({ _id: userId }, process.env.ACCESS_TOKEN_SECRET);
};

module.exports = { tokenGenerator, refreshTokenGenerator };
