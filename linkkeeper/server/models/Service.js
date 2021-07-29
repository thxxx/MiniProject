const mongoose = require('mongoose');
const saltRounds = 10;
const moment = require("moment");

const serviceSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50
    },
    image: String,
    description: {
        type:String,
        minlength:10
    },
    ratingRatio:{
        type: Number,
    },
    feature:{
        type:String,
        minlength:10
    },
    link:{
        type:String,
        unique: 1
    },
    category:{
        type: String
    }
}, { timestamps:true } )

// userSchema.pre('save', function( next ) {
//     var user = this;
    
//     if(user.isModified('password')){    
//         // console.log('password changed')
//         bcrypt.genSalt(saltRounds, function(err, salt){
//             if(err) return next(err);
    
//             bcrypt.hash(user.password, salt, function(err, hash){
//                 if(err) return next(err);
//                 user.password = hash 
//                 next()
//             })
//         })
//     } else {
//         next()
//     }
// });

// userSchema.methods.comparePassword = function(plainPassword,cb){
//     bcrypt.compare(plainPassword, this.password, function(err, isMatch){
//         if (err) return cb(err);
//         cb(null, isMatch)
//     })
// }
const Service = mongoose.model('Service', serviceSchema);

module.exports = { Service }