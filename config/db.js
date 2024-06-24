import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  // field specified in the db will be saved in the database
  mongoose.set("strictQuery", true);
  // if db is conneted dont connect again
  if (connected) {
    console.log("already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    connected = true;
    console.log("connected to Mongodb");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
