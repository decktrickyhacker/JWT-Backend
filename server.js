/* import express from "express"; */
const express = require('express');
const dotenv = require('dotenv');
/* import dotenv from "dotenv"; */
const connectDB = require("./config/db.js");
//import colors from "colors";

const cors = require('cors');



const path = require('path');
//const noteRoutes = require("./routes/noteRoutes.js");
const userRoutes = require("./routes/userRoutes");
const goalRoutes = require("./routes/goalRoutes");
//import path from "path";

//import noteRoutes from "./routes/noteRoutes.js";
//import userRoutes from "./routes/userRoutes.js";
const { errorHandler, notFound } = require("./middleware/errorMiddleware.js");

dotenv.config();

connectDB();

const app = express(); // main thing

app.use(cors())

app.use(express.json()); // to accept json data

//app.use("/api/notes", noteRoutes);
app.use('/api/goals', goalRoutes);
app.use("/api/users", userRoutes);

// --------------------------deployment------------------------------
//const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6000;

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}..`/* .yellow
      .bold */
  )
);
