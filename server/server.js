require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectToDB = require("./config/db");
const errorMiddleware = require("./middleware/error.middleware");
const authMiddleware = require("./middleware/auth.middleware");

const authRoutes = require("./routes/auth.routes");
const adminRoutes = require("./routes/admin.routes");
const memberRoutes = require("./routes/member.routes");
const User = require("./models/user.model");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(errorMiddleware());

connectToDB();

app.use("/api/auth", authRoutes);
app.use("/api/board", adminRoutes);
app.use("/api/tasks", memberRoutes);

app.get("/api/profile", authMiddleware, async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ err: "User not found" });

    res.json(user);
  } catch (error) {
    next(error);
  }
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server running on port - ${PORT}`);
});
