import mongoose from "mongoose";
import { configDotenv } from "dotenv";

export async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Database connected");
    } catch (error) {
        console.error("DB connection failed", error);
        process.exit(1);
    }
}