const express = require('express')
const app = express()
const port = 5000

const { User } = require("./models/User");
const bodyParser  = require("body-parser");
const config = require("./config/key");
const cookieParser = require("cookie-parser");

const { auth } = require("./models/middleware/auth");




//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());

const mongoose = require('mongoose')

mongoose.connect(config.mongoURI, {
    userNewParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=> console.log("good connected MongoDB..."))
  .catch((err) => console.log("connect failed", err))

app.get('/', function (req, res) {
    res.send('Hello World~~ ?')
})

app.post('/register', (req, res)=> {
    //회원가입 할 때 필요한 정보들을 클라이언트에서 가져오면 그것들을 데이터 베이스에 넣어준다.
    const user = new User(req.body);
    // save하면 저장되고 뒤에는 콜백 함수가 옴.
    user.save((err, doc) => {
        if (err) return res.json({ success: false, err }); // json형식으로 정보를 전달한다.
        return res.status(200).json({ // status 200은 성공했다는 뜻.
            success: true
        });
    });
})

app.post('/login', (req,res)=>{
    // 요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email}, (err, user) => {
        if(!user){
            return res.json({loginSuccess: false,
                message:"해당하는 유저가 없습니다."
            })
        }
        
        // 이메일이 디비에 있다면 비밀번호가 맞는지 확인
        // 아래 메서드는 User module에서 만든다.
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch){
                return res.json({loginSuccess:false, message:"틀렸습니다. 비밀번호가!"})
            }
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);
                // 토큰을 저장한다. 어디에? 쿠키에?
                res.cookie("x_auth", user.token) // 쿠키에 x_auth가 생기고 user.token이 들어감
                .status(200)
                .json({loginSuccess:true, userId: user._id})
            })
        })
    })
})

app.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});


app.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
    });
});

app.listen(port, () => {console.log(`${port} Port IS waiting!`)})