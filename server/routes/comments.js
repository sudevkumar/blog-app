const express = require("express");
const router = express.Router();
const Comments = require("../models/Comments");
const verifyToken = require("../middleware/verifyToken");

// Get Post Comment

router.get("/post/:postId", async (req, res) => {
  try {
    const comments = await Comments.find({ postId: req.params.postId }).sort({
      createdAt: -1,
    });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// Create Post

router.post("/create", verifyToken, async (req, res) => {
  try {
    const newComment = new Comments(req.body);
    const saveComment = await newComment.save();
    res.status(200).json(saveComment);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// Update Post

router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedComment = await Comments.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// Delete Post

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Comments.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("Comment has been deleted!");
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

module.exports = router;
