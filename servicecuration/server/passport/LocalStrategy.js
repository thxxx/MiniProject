const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const db = require('../config/databases')

module.exports = (passport) => {

passport.use(new LocalStrategy(
    // 여기에 낑겨넣으면 된다. req.body.에 달려오는 이름
    {
        usernameField: 'userId',
        passwordField: 'userPassword'
    },
    (username, password, done) => {
        console.log("로그인 시도2")
        // 홈에서 전송한 input중 name이 email, passwd인 애를 찾아서 username, password에 넣어준다.
        
        const sql = "SELECT * FROM user WHERE userId = ?"
        
        db.query(sql, username, async (err, result) => {
            if(err) res.status(400).json({message: "query error"})
            else{
                if(result.length != 0){
                    console.log("아이디는 있음", result)
                    const rightPassword = bcrypt.compare(password, result[0].password)

                    if(rightPassword){
                        console.log("아이디 비밀번호 둘 다 맞음")
                        return done(null, result[0])
                    } else {
                        console.log("비밀번호가 다름", result)
                        return done(null, false, { message: 'Incorrect password.' });
                    }
                } else { // result가 []이다 -> 없는 아이디를 입력했다.
                    console.log("아이디 틀림");
                    return done(null, false, { message: 'Incorrect username.' });
                }                
            }
        })
      }
    ));

}