const { Router } = require("express");
const router = Router();

const {
  createBoard,
  deleteBoard,
  inviteUser,
  removeUser,
} = require("../controllers/admin.controller");
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");

router.use(authMiddleware, roleMiddleware(["Admin"]));

router.post("/", createBoard);
router.post("/user/invite", inviteUser);
router.post("/user/remove", removeUser);
router.delete("/:id", deleteBoard);

module.exports = router;
