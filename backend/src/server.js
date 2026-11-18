import express from "express";
import dotenv from "dotenv";

import bookmarkRouter from "./routes/bookmarks.js";
import folderRouter from "./routes/folders.js";
import { connectDB } from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/bookmarks", bookmarkRouter);
app.use("/folders", folderRouter);

app.use(errorHandler);

app.listen(process.env.PORT);
