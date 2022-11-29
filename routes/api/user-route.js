const router = require("express").Router();
const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  deleteFriend,
  createFriend,
} = require("../../controllers/user-controller");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").delete(deleteFriend);

router.route("/:userId/friends").post(createFriend);

module.exports = router;
