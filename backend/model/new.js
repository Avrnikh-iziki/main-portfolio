const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema({
    Email: String,
    Name: String,
    Message: String,
    cheked: {
        type: Boolean,
        default: false,
    },
    date: {type: Date, default: Date.now},
})

const Client = mongoose.model("client", ClientSchema);
module.exports = Client