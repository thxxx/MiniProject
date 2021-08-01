const express = require('express');
const router = express.Router();
const { Service } = require("../models/Service")
const { Request } = require("../models/Request")
const { PythonShell } = require('python-shell')

const { auth } = require("../middleware/auth")

//=================================
//             Services
//=================================

router.post('/getresult', (req, res) => {

    console.log(req.body.options)

    const options = req.body.options    

    const request = new Request(options)

    request.save((err, doc) => {
        if(err) return res.json({success: false, err})

        return res.status(200).json({
            success:true,
            message:req.body
        })
    })

})

router.post('/uploadLink', (req, res) => {
    const link = req.body.link
    console.log("recieved link : ",link)

    let options = {
        mode: 'text',
        pythonPath: '', // Python의 경로를 나타낸다
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath:`${__dirname}`, //스크립트 있는곳
        args: [link] // Python Script에 넘겨줄 인자 목록
    };
    
    PythonShell.run('crawlService.py', options, (err, msg) => {
        if(err) {
            console.log("에러입니다,")
            throw err;
        } 
        return res.status(200).json({
            success : true,
            message : msg
        })

    })
})

router.post('/saveService', (req, res) => {

    const service = new Service(req.body)

    console.log("받은 정보 ", service)

    service.save((err, doc) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success : true,
        })
    })
})

module.exports = router;
