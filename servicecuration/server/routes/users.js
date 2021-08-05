const express = require('express');
const router = express.Router();
const db = require('../config/databases')
const bcrypt = require('bcrypt')
const { isLogined, isNotLogined } = require('../middlewares/login');
const passport = require('passport');

router.get('/getUsers', (req, res) => {
    res.status(200).json({ success:true })
})

// async여기서 어짜피 의미없긴하다.
router.post('/register', async (req, res) => {
    console.log("회원가입에서 온 정보", req.body)

    const {userId, gender, job, userPassword } = req.body
    const sql1 = "SELECT * FROM user WHERE userId =?"
    const password = await bcrypt.hash(userPassword, 14)

    db.query(sql1, userId, (err, user, fields) => {
        console.log("user : ", user)
        if(user.length != 0) {
            console.log("이미 있는 아이디입니다.")
            res.status(200).json({ 
                success:false,
                message: "이미 존재하는 아이디입니다."
            })
        }else{
            const sql = "INSERT INTO user (userId, gender, job, password) VALUES(?,?,?,?)"
            const params = [userId, gender, job, password]
        
            db.query(sql, params, (err, result) => {
                if(err) res.status(200).json({
                    success:false
                })
                console.log("디비에 추가했습니다. ", err, result)
                res.status(200).json({
                    registerSuccess : true
                })
            })

        }
    })
})

// 미들웨어로 isLogined를 사용한다. 로그인 되어있지 않다 = passport.isAuthenticated가 false면 next를 호출하지 않아서 다음으로 못넘어가니까!
router.post('/login', isNotLogined, function(req, res, next) {
    console.log("로그인 온 정보", req.body)
    // local 소셜로그인 말고 사이트마다 있는 로컬 로그인
    // local전략을 사용해서 호출한 done의 1,2,3번째 인자들이 각각 err, user, info로 들어간다.
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(400).json({ loginSuccess: false, message: info });
        }
        if (!user) {
            console.log("아이디가 없거나 틀림");
            return res.status(200).json({ loginSuccess: false, message: info });
        } else {
            console.log("아이디 비번 맞췄구요 리턴합니다.", user)
            return req.login(user, (loginErr) => { // req.login에 제공하는 user객체가 serializeUser로 넘어간다.
                if (err) {
                    console.log(loginErr)
                    return next(err)
                } else {
                    return res.status(200).json({ loginSuccess: true, user: user });
                }
            });
    }
    })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙인다.
})


router.get('/logout', isLogined, (req, res) => {
    req.logout();
	request.session.save((err) => {
		resoinse.redirect('/');
	}) // 이게 좀 더 안전하긴 하다.
	
})
module.exports = router