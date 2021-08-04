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

var app = express() // express 객체 생성

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

// Router 관리
app.use('/api/services', require('./routes/services'))
app.use('/api/users', require('./routes/users'))

app.get('/', function (req, res, next) {
    console.log(req.session)
    if(req.session.num === undefined){
        req.session.num = 1;
    }else{
        req.session.num += 1;
    }
    conn.query("SELECT * FROM service", (err, results) => {
        console.log(results);
    })
    res.send(`View ${req.session.num}`)
})
app.listen(3001, () => {
    console.log('3001 open!')
})