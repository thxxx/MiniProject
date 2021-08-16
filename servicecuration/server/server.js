const express = require('express')
const parseurl = require('parseurl')
const session = require('express-session') 
const logger = require('morgan')
// 쿠키파서를 사용한다.
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv")
dotenv.config();
const conn = require('./config/databases')
const cors = require('cors')
const passport = require('passport') // 로그인 전략을 위한 passport
const passportConfig = require('./passport') // passport폴더안에 index.js로 구현

var app = express() // express 객체 생성
passportConfig(passport)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie:{
      httpOnly:true,
      secure:false
  }
}))
app.use(logger('short'))
app.use(passport.initialize()) // 요청에 passport설정을 심는다.
app.use(passport.session()) // req.session객체에 passport정보를 저장.
// session객체에 passport 정보를 저장하기 때문에 세션뒤에 나와야 함.

app.get('/', (req, res) => {
    console.log("항상", req)
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});


// Router 관리
app.use('/api/services', require('./routes/services'))
app.use('/api/users', require('./routes/users'))

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

    // Set static folder   
    // All the javascript and css files will be read and served from this folder
    app.use(express.static("client/build"));
  
    // index.html for all page routes    html or routing and naviagtion
    
}

app.listen(3001, () => {
    console.log('3001 open!')
})