const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    work: {
        type: String,
        enum: ["chef", "waiter", "manager"],
        require: true,
    },
    salary: {
        type: Number,
        require: true

    },
    mobile: {
        type: String,
        require: true
    },
    address: {
        type: String,

    },


},
    { timestamps: true, },
);
const person = mongoose.model("person", personSchema);
module.exports = person;