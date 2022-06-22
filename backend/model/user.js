const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    Email: String,
    password:String,
})

const User = mongoose.model("user", UserSchema);
module.exports = User