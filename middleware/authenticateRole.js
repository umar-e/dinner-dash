const authenticateRole = (req, res, next) => {
  const { user } = req.user;
  if (user.isAdmin) {
    next();
  } else {
    return res.status(401).json({ message: "You are not an admin" });
  }
};
module.exports = authenticateRole;
