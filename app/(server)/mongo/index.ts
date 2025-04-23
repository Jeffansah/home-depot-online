import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) {
    console.log("connected to db");

    return cached.conn;
  }

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "home-depot",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  if (!cached.conn) {
    throw new Error("MongoDB connection failed");
  }

  return cached.conn;
};
