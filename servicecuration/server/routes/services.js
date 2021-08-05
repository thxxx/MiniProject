const express = require('express');
const router = express.Router();
const db = require('../config/databases');

router.get('/', (req, res) => {
    console.log("클릭", req.user)
    res.json({message:"Hello World"});
})

module.exports = router