const mongoose = require("mongoose");
require("dotenv").config();
const mongoURL = process.env.DB_URL
mongoose.connect(mongoURL)
    .then(() => { console.log("Db connected") })
    .catch((error) => { console.log("Hence error is ", error) });
module.exports = mongoose;


// NDxEftU72RptGXiD