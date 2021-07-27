const express = require('express');
const router = express.Router();

//=================================
//             Service
//=================================

router.get("/getresult", (req, res) => {
    return res.status(200).json({
        success:true
    });
});

module.exports = router;
