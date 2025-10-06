const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const { email, password, role } = req.body;

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ err: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({ email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ msg: "User registration successfull", user });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ err: "User not found" });

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ err: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    res.status(200).json({ msg: "Login successful", token, user });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
