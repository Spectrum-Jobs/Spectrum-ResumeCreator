const express = require("express");
const router = express.Router();
const userRegister = require('./userRegister');
const userLogin = require('./userLogin')

//Routes
router.post('/register', userRegister);

router.post('/login', userLogin);


module.exports = router
