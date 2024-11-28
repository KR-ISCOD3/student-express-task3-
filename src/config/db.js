const { config } = require("dotenv");
const mongoose = require("mongoose");

config();

const connectiondb = async () => {
  try {
    await mongoose
      .connect("mongodb+srv://raksmey:auth123@cluster0.ekqum.mongodb.net/student-db", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected"))
      .catch((err) => console.error(err));
  } catch (e) {
    console.error("Error:", e);
  }
};

module.exports = connectiondb;
