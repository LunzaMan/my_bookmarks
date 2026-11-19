import Bookmark from "../models/Bookmark.js";
import { SortTypesList } from "../constants/sortType.js";
import { checkDuplicateBookmark } from "../utils/checkDuplicate.js";

export const getBookmarks = async (req, res) => {
  const { sortType } = req.body || {};
  const sort = SortTypesList[sortType] || SortTypesList.lastModified;
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
