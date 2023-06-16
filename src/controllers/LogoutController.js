const db = require('../config/Database')

const postLogout = (req,res)=>{
    db.query(`UPDATE user SET is_login=false WHERE user.id=${req.cookies.user_id}`)

    res.clearCookie('is_login')
}

module.exports = {postLogout}