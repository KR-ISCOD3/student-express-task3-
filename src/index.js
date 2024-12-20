const express = require('express');
const {config} = require("dotenv");
const cors = require('cors');
const connectiondb = require('./config/db');
const router = require('./routes/studentroute');
config()

const app = express();
const port = process.env.PORT || 5004;
const host = process.env.HOST || "localhost";

connectiondb()

app.use(express.json())
app.use(cors());
app.use('/api',router)

app.listen(port,()=>{
    console.log(`http://${host}:${port}`);
})