import Bookmark from "../models/Bookmark.js";
import { checkDuplicateBookmark } from "../utils/checkDuplicate.js";
import { sortList } from "../utils/sortList.js";

export const getBookmarks = async (req, res) => {
  const sort = sortList(req.body.sortType, "bookmark");
  const bookmarks = await Bookmark.find().sort(sort);
  res.status(200).json(bookmarks);
};

export const newBookmark = async (req, res) => {
  const { title, url, description, folder, tags } = req.body;
  await checkDuplicateBookmark(url);
  const newBookmark = new Bookmark({ title, url, description, folder, tags });
  await newBookmark.save();
  res.status(201).json(newBookmark);
};

export const getBookmarkById = async (req, res) => {
  const bookmark = await Bookmark.findById(req.params.id);
  if (!bookmark) throw new Error("InvalidID");
  res.status(200).json(bookmark);
};

export const updateBookmark = async (req, res) => {
  const { title, url, description, folder, tags } = req.body;
  await checkDuplicateBookmark(url);
  const updatedBookmark = await Bookmark.findByIdAndUpdate(
    req.params.id,
    { title, url, description, folder, tags },
    { returnDocument: "after" },
  );
  if (!updatedBookmark) throw new Error("InvalidID");
  res.status(201).json(updatedBookmark);
};

export const deleteBookmark = async (req, res) => {
  const deletedBookmark = await Bookmark.findByIdAndDelete(req.params.id);
  if (!deletedBookmark) throw new Error("InvalidID");
  res.status(201).json({ message: "Bookmark deleted" });
};

export const BookmarkWithTag = async (req, res) => {
  const tag_name = req.params.tag;
  const bookmarks = await Bookmark.find({ "tags.name": tag_name });
  res.status(200).json(bookmarks);
};
