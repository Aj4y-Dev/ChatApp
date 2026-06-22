import mongoose from "mongoose";
import { configDotenv } from "dotenv";

export async function connectDb() {
    try {
        const mongoUrl = await mongoose.connect(process.env.MONGO_DB_URL);

        if(!mongoUrl) {
            throw new Error("MONGO_DB_URL is required");
        }
        console.log("Database connected");
    } catch (error) {
        console.error("DB connection failed", error);
        process.exit(1);
    }
}