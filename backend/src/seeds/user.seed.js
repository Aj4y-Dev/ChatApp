import "dotenv/config";
import mongoose from "mongoose";
import { connectDb } from "../config/connectdb.js";
import User from "../model/user.model.js";

const seedUsers = [
  [
    "seed_aarav_sharma",
    "Aarav Sharma",
    "aarav.sharma@example.com",
    "https://randomuser.me/api/portraits/men/75.jpg",
  ],
  [
    "seed_sita_thapa",
    "Sita Thapa",
    "sita.thapa@example.com",
    "https://randomuser.me/api/portraits/women/44.jpg",
  ],
  [
    "seed_bikram_rai",
    "Bikram Rai",
    "bikram.rai@example.com",
    "https://randomuser.me/api/portraits/men/46.jpg",
  ],
  [
    "seed_anita_gurung",
    "Anita Gurung",
    "anita.gurung@example.com",
    "https://randomuser.me/api/portraits/women/62.jpg",
  ],
  [
    "seed_roshan_magar",
    "Roshan Magar",
    "roshan.magar@example.com",
    "https://randomuser.me/api/portraits/men/36.jpg",
  ],
];

async function seedDatabase() {
  await connectDb();
  const result = await User.bulkWrite(
    seedUsers.map(([clerkId, fullName, email, profilePic]) => ({
      updateOne: {
        filter: { clerkId },
        update: {
          $set: { clerkId, fullName, email, profilePic },
        },
        upsert: true,
      },
    })),
  );
  console.log(
    `Seeded users. Inserted: ${result.upsertedCount}, updated: ${result.modifiedCount}, matched: ${result.matchedCount}`,
  );
}

seedDatabase()
  .catch((error) => {
    console.error("Failed to seed users:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.connection.close();
  });
