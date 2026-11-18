import mongoose from "mongoose";


const folderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        icon: {
            type: String,
            default: "folder"
        }
    },
    { timeStamps: true }
);

const Folder = mongoose.model("Folder", folderSchema);

export default Folder;
