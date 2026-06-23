import express from "express";
import {
  getUsersForSidebar,
  getConversationForSidebar,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/conversation", protectRoute, getConversationForSidebar);

export default router;
