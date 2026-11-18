import { SortTypesList } from "../constants/sortType.js";
import Folder from "../models/Folder.js";

export const getFolder = async (req, res) => {
  const folder = await Folder.find();
  res.status(200).json(folder);
};

export const createFolder = async (req, res) => {};

export const getFolderById = async (req, res) => {};

export const updateFolder = async (req, res) => {};

export const deleteFolder = async (req, res) => {};
