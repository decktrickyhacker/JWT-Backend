//Connection file to mongo db
/* import mongoose from "mongoose"; */
const mongoose = require('mongoose');
/* import colors from "colors"; */

const MONGO_URI ="mongodb+srv://testuser01:8HHAoGXP2Kw0BqMf@loginsignup.4x5zbva.mongodb.net/logindb?retryWrites=true"


mongoose.set('strictQuery', true)
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    /*   useCreateIndex: true, */
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`/* .cyan.underline */);
  } catch (error) {
    console.error(`Error: ${error.message}`/* .red.bold */);
    process.exit();
  }
};

module.exports = connectDB;
