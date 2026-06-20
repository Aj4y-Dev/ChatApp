import express from "express";
import dotenv from "dotenv";

import {clerkMiddleware} from "@clerk/express";

import { connectDb } from "./config/connectdb.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use(clerkMiddleware());

app.get("/", (req, res) => res.send("Api is working"));

app.listen(port, () => {
    connectDb();
    console.log(`listing in port ${port}`);
})