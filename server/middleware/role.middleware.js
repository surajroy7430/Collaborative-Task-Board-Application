const roleMiddleware = (roles = []) => {
  async (req, res, next) => {
    if (!res.user) return res.status(401).json({ err: "User not authorized" });

    if (roles.length === 0) return next();

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ err: "Access denied: insufficient role" });
    }

    next();
  };
};

module.exports = roleMiddleware;
