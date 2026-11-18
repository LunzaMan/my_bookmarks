import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Connected DB sucessfully");
    } catch (error) {
        console.log("ERROR occured:\n", error);
        process.exit(1)
    };
};
