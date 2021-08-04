const express = require('express');
const router = express.Router();
const db = require('../config/databases')

router.get('/getUsers', (req, res) => {
    res.status(200).json({ success:true })
})

router.post('/login', (req, res) => {
    console.log("로그인에서 온 정보", req.body)
    res.status(200).json({ 
        loginSuccess:true 
    })
})

module.exports = router