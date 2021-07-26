const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const saltRounds = 10;
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email: {
        type:String,
        trim: true, // 빈칸 없애줌
        unique:1
    },
    password: {
        type:String,
        minlength:6
    },
    lastname: {
        type:String,
        maxlength: 50
    },
    role : {
        type:Number,
        default: 0 
    },
    image: String,
    token : {
        type: String,
    },
    tokenExp :{
        type: Number
    }
})

userSchema.pre('save', () => {
    const user = this;
    if(user.isModified('password')){ // password가 변경되었을때만.
        //비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if(err) return next(err); // 바로 암호화 없이 save로 감
            bcrypt.hash(user.password, salt, (err, hash) => { // hash가 암호화된 비밀번호!!
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    }else{
        next()
    }
})

userSchema.methods.comparePassword = (plainPassword, cb) => {
    //plainPassword 와 암호화되어 저장되어있는 디비의 비밀번호를 비교해야한다.
    bcrypt.compare(plainPassword, this.password, (err,isMatch)=>{
        if(err) return cb(err);
        cb(null, isMatch);
    })
}

userSchema.methods.generateToken = (callback) => {

    const user = this;

    //jsonwebtoken 을 사용하여 토큰 생성하기
    var token = jwt.sign(user._id.toHexString(), 'secretToken')

    user.token = token;
    user.save((err, user) => {
        if(err) return callback(err);
        callback(null, user);
    })
}

userSchema.statics.findByToken = function (token, cb) {
    var user = this;

    jwt.verify(token,'secret',function(err, decode){
        user.findOne({"_id":decode, "token":token}, function(err, user){
            if(err) return cb(err);
            cb(null, user);
        })
    })
}

const User = mongoose.model('User', userSchema)

module.exports = { User }