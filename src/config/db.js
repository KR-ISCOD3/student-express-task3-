const { config } = require("dotenv");
const mongoose = require("mongoose");

config();

const url = process.env.MONGO_URL;

const connection = async () => {
  try {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000,
      })
      .then(() => console.log("Connected"))
      .catch((err) => console.error(err));
  } catch (e) {
    console.error("Error:", e);
  }
};

module.exports = connection;
