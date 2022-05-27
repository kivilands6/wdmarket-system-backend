const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')
const cors = require("cors")

router.use(cors())

router.get('/', userController.home)

// check token to log out front-end if expired
router.post("/checkToken", userController.checkToken)
router.post("/login", userController.apiLogin)
router.post('/register', userController.apiRegister)

module.exports = router