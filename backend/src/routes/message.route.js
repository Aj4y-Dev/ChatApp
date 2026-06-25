import express from "express";
import {
  getUsersForSidebar,
  getConversationForSidebar,
  getmessages,
  sendMessage,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/conversations", protectRoute, getConversationForSidebar);
router.get("/:id", protectRoute, getmessages);
router.post("/send/:id", protectRoute, upload.single("media"), sendMessage); //todo: show this in frontend

export default router;
