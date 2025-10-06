const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res
    .status(res.statusCode || 500)
    .json({ err: err.message || "Internal Server Error" });
};

module.exports = errorMiddleware;
