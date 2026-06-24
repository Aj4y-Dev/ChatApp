import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import path from "path";

import { clerkMiddleware } from "@clerk/express";
import { connectDb } from "./config/connectdb.js";
import job from "./lib/corn.js";
import clerkWebhook from "./webhooks/clerk.webhook.js";
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const port = process.env.PORT;

const publicDir = path.join(process.cwd(), "public"); //Gets the full path of the public folder. like C:\project\public

app.use(
  "/api/webhooks/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhook,
);

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    Credential: true,
  }),
);

app.use(clerkMiddleware());

app.get("/health", (req, res) => {
  res.status(200).json({
    ok: true,
  });
});

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

// if the public directory exists, serve the static files
// this is for the production build
if (fs.existsSync(publicDir)) {
  //Check if the public folder exist
  app.use(express.static(publicDir)); //Makes files inside public accessible from the browser.

  app.get("/{*any}", (req, res, next) => {
    //For any route that Express doesn't know about (/about, /profile, etc.), send index.html.
    res.sendFile(path.join(publicDir, "index.html"), (err) => next(err));
  });
}

server.listen(port, () => {
  connectDb();
  console.log(`listing in port ${port}`);

  if (process.env.NODE_ENV === "production") {
    job.start();
  }
});
