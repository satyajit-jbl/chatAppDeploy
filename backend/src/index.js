// const express = require("express") (by adding  "type": "module" we can import instead)
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";  //for deployment

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js" //এখানে authRoutes হলো একটি নামমাত্র অ্যাসাইনমেন্ট, যেটি router কে ধরে রেখেছে। অর্থাৎ, যেহেতু auth.route.js এ default export করা হয়েছে, তাই import করার সময় যেকোনো নাম ব্যবহার করা যায়।
// import { connect } from "mongoose";
import messageRoutes from "./routes/message.route.js" 
import { app, server } from "./lib/socket.js";


dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve(); //for deployment

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5175",
    credentials: true,
}))

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
  }

//to test the server
app.get("/", (req, res) => {
    res.send("API is running...");
});

server.listen(PORT, ()=>{
    console.log("Server is running on PORT:" +PORT);
    connectDB()
});