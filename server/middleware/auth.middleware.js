const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const header = req.headers.Authorization;
    const token = header && header.split(" ")[1];

    const data = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(data.id);
    if (!user) return res.status(404).json({ err: "User not found" });

    req.user = user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ err: "Invalid token or expired" });
  }
};

module.exports = authMiddleware;
