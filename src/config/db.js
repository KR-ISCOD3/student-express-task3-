const { config } = require("dotenv");
const mongoose = require("mongoose");

config();

const url = process.env.MONGO_URL;

const connectiondb = async () => {
  try {
    await mongoose
      .connect(url, {
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
