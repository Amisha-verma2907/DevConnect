import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("✅ Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "yourDBname",
    });
    console.log("✅ MongoDB connection established");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
