const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    messages: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;