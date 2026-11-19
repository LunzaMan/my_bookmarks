import Folder from "../models/Folder.js";
import Bookmark from "../models/Bookmark.js";

export const checkDuplicateFolder = async (name) => {
  const isDuplicate = await Folder.findOne({ name });
  if (isDuplicate) throw new Error("DuplicateFolderEntry");
  return;
};

export const checkDuplicateBookmark = async (url) => {
  const isDuplicate = await Bookmark.findOne({ url });
  if (isDuplicate) throw new Error("DuplicateURL");
  return;
};
