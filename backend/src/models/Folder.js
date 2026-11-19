import mongoose from "mongoose";

const folderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Folder requires a name"],
      trim: true,
      unique: true,
    },
    icon: {
      type: String,
      default: "folder",
    },
  },
  { timeStamps: true },
);

const Folder = mongoose.model("Folder", folderSchema);

export default Folder;
