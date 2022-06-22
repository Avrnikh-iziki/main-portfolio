require("dotenv").config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require("../model/user");

const user = async (req , res) =>{
 const {  Email,password } = req.body
    const user = await User.findOne({Email})
    if (!user) return res.json({message: { err:" Email  is wrong"}})

    const ValidPassword = await bcrypt.compare(password, user.password)
    if(!ValidPassword) return res.json({message : {err:"Password is wrong"}})

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('Authorization', token).json({ message : {token: token }})
}
module.exports = { 
   user
}