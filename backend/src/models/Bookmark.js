import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxLength: 100,
    },
    url: {
      type: String,
      required: [true, "URL is a required field"],
    },
    description: String,
    folder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "folder",
      default: null,
    },
    tags: {
      type: [
        {
          name: {
            type: String,
            trim: true,
          },
        },
      ],
      default: undefined,
    },
  },
  { timestamps: true },
);

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

export default Bookmark;
