import mongoose from "mongoose";

const connectDB = (handler) => async (req, res, next) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    return handler(req, res);
  } catch (error) {
    console.error("Error connecting to the database:", error);
    return res.status(500).json({ error: "Database connection error" });
  }
};

export default connectDB;
