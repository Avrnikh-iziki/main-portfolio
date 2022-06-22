const express = require('express');
const router = express.Router()
const {message, orders, cheked , delet} = require('../controller/data')
const auth = require('../config/jwttoken')
router.post('/order', orders)
router.post('/message', message)
router.post('/cheked',auth,cheked)
router.post('/delet',auth, delet)

module.exports = router