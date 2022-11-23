const bcrypt = require("bcrypt");

const { register, login } = require("../services/userServices");
const { tokenGenerator } = require("../utils/JsonTokenGenerator");

const registerUser = async (req, res) => {
  const { name, email, password, displayName } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await register(name, email, hashedPassword, displayName);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Could not register user" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user;
    try{
      user = (await login(email)).toJSON();}
    catch (error) {
      return res.status(404).json({ message: "User not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      delete user["password"];
      const token = tokenGenerator(user);
      res.send({ user, token });
    } else {
      res.status(401).json({ message: "Password Invalid" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};
module.exports = {
  registerUser,
  loginUser,
};
