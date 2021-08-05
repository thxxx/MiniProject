const local = require('./LocalStrategy')
// const google = require('./googleStrategy')
const db = require('../config/databases')

module.exports = (passport) => {
    passport.serializeUser(function(user, done) {
        done(null, user.id) //우리가 처리할 부분
        // 사용자의 식별자 값만 추출해서 호출해야됨.
        //   -> 세션데이터의 패스포트 안의 유저정보로 간다.
        //   -> 로그인이 성공했다는 정보를 세션스토어에 저장하는 역할.
    })

    passport.deserializeUser(function(id, done) {
        console.log("디시리얼라이즈")
        //성공한 정보갖고 활용할때 새로고침할때 계속 사용된다.
        // User_code가 id(첫번째 인자)로 넘어온다.
        console.log("Hello World", id);

        const sql = "SELECT * FROM user WHERE id=?"

        db.query(sql, id, (err, user) => {
            if(err) done(err)
            else{
                done(null, user)
            }
        })
        // User.findById(id, function(err, user) {
        //   done(err, user);
        // 그 저장된 식별자를 기준으로 해서 필요한 정보를 조회해서 실제데이터를 가져와서
        // 넣어준다.
        // }); 우리가 처리할 부분
    })
    //LocalStrategy파일 안에서 구현한 로컬 전략을 사용
    local(passport)
}



