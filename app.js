const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/db");
const router = require("./routers/personRouter");


const app = express();



app.use(express.json());
const PORT=process.env.port||3002;
app.use('/api/', router);


app.listen(PORT, () => console.log(`Port started at => ${PORT}`));