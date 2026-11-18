import express from "express";
import {
  getBookmarks,
  newBookmark,
  updateBookmark,
  deleteBookmark,
  getBookmarkById,
} from "../controllers/bookmarksController.js";

const router = express.Router();

router.get("/", getBookmarks);

router.post("/", newBookmark);

router
  .route("/:id")
  .get(getBookmarkById)
  .put(updateBookmark)
  .delete(deleteBookmark);

export default router;
