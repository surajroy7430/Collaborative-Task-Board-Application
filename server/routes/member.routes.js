const { Router } = require("express");
const router = Router();

const {
  getTasks,
  createTask,
  updateTask,
  moveTask,
  deleteTask,
} = require("../controllers/member.controller");
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");

router.use(authMiddleware, roleMiddleware(["Member"]));

router.get("/", getTasks);
router.post("/", createTask);
router.put("/move/:id", moveTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
