import { getAuth } from "@clerk/express";
import User from "../model/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
    }

    const user = User.findOne({ clerkId: userId });

    if (!user) {
      res.status(404).json({ message: "User profile is not synced yet" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Error in protectRoute middleware:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
