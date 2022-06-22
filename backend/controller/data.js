require("dotenv").config();
const Client = require("../model/new");

const message = async (req, res) => {
    const { Name, Email, Message } = req.body
    const newOrder = new Client({
        Email,
        Name,
        Message,
    })
    try {
        const order = await newOrder.save()
        res.json({ message: `thank you ${Name}, I will contact you soon` })
    } catch (err) {
        return res.json({ message: "failed to send message, please try again" })
    }
}
const orders = async (req, res) => {
    Client.find({}, (err, data) => {
        if (err) return res.json({ message: { faild: err } })
        res.json({ message: { sucess: data } })
    })
}
const cheked = async (req, res) => {
    const { id } = req.body
    Client.updateOne({ _id: id }, { $set: { cheked: true } }, (err, data) => {
        if (err) return res.json({ message: { faild: err } })
        res.json({ message: { success: "order cheked" } })
    })
}
const delet = async (req, res) => {
    const { id } = req.body
    Client.findByIdAndDelete(id, (err, data) => {
        if (err) return res.json({ message: { faild: err } })
        res.json({ message: { success: "orders deleted" } })
    })
}
module.exports = {
    message,
    orders,
    cheked,
    delet,
}