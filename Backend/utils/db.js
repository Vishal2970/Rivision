require('dotenv').config();
const mongoose = require("mongoose");

//const MONGODB_URI = "mongodb://127.0.0.1:27017/mern_admin";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection successful to database");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;