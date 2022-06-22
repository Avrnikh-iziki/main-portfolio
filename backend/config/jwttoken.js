const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.json({ message : {err:'Access Deneid'}});
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified
        next()
    } catch (err) {
        res.send('Access Deined')
    }
}