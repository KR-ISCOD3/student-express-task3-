const { config } = require("dotenv");
const mongoose = require("mongoose");

config();

const url = process.env.MONGO_URL || "mongodb+srv://raksmey:auth123@cluster0.ekqum.mongodb.net/student-db";

const connectiondb = async () => {
  try {
    await mongoose
      .connect(url)
      .then(() => console.log("Connected"))
      .catch((err) => console.error(err));
  } catch (e) {
    console.error("Error:", e);
  }
};

module.exports = connectiondb;
