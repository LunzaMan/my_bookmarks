import Folder from "../models/Folder.js";
import { checkDuplicateFolder } from "../utils/checkDuplicate.js";
import { sortList } from "../utils/sortList.js";

export const getFolder = async (req, res) => {
  const sort = sortList(req.body.sortType, "folder");
  const folder = await Folder.find().sort(sort);
  res.status(200).json(folder);
};

export const createFolder = async (req, res) => {
  const { name, icon } = req.body;
  console.log(name);
  await checkDuplicateFolder(name);
  const folder = new Folder({ name, icon });
  await folder.save();
  res.status(201).json(folder);
};

export const getFolderById = async (req, res) => {
  const folder = await Folder.findById(req.params.id);
  if (!folder) throw new Error("InvalidID");
  res.status(200).json(folder);
};

export const updateFolder = async (req, res) => {
  const { name, icon } = req.body;
  await checkDuplicateFolder(name);
  const folder = await Folder.findByIdAndUpdate(
    req.params.id,
    { name, icon },
    { returnDocument: "after" },
  );
  if (!folder) throw new Error("InvalidID");
  res.status(201).json(folder);
};

export const deleteFolder = async (req, res) => {
  const folder = await Folder.findByIdAndDelete(req.params.id);
  if (!folder) throw new Error("InvalidID");
  res.status(201).json({ message: "Folder Deleted Sucessfully" });

  res.status;
};
