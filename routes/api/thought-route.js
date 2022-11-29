const router = require("express").Router();
const {
  getIDThought,
  getThoughts,
  updateThought,
  createThought,
  createReaction,
  deleteReaction,
  deleteThought,
} = require("../../controllers/thought-Controller");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getIDThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(createReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
module.exports = router;
