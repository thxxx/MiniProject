exports.isLogined = (req,res,next) => {
    if(req.isAuthenticated()){
        next()
    }else{
        res.status(403).send("로그인 필요")
    }
}

exports.isNotLogined = (req, res, next) => {
    if(!req.isAuthenticated()){
        next()
    }else{
        res.redirect('/')
    }
}