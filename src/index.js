const express = require('express');
const {config} = require("dotenv");
const connection = require('./config/db');
const router = require('./routes/studentroute');
config()

const app = express();
const port = process.env.PORT || 3001;
const host = process.env.HOST || "localhost";

connection()

app.use(express.json())
app.use('/api',router)

app.listen(port,()=>{
    console.log(`http://${host}:${port}`);
})