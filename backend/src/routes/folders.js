import express, { Router } from "express";
import {
  getFolder,
  createFolder,
  getFolderById,
  updateFolder,
  deleteFolder,
} from "../controllers/foldersController.js";

const router = express.Router();

router.get("/", getFolder);

router.post("/", createFolder);

router.route("/:id").get(getFolderById).put(updateFolder).delete(deleteFolder);
export default router;
