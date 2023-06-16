const db = require('../config/Database')

const renderHalamanOrder = async (req,res)=>{
    if(!req.cookies.user_id) return res.redirect('/login')
    const [user] = await db.query(`SELECT * FROM user WHERE id=${req.cookies.user_id}`)

    if(user[0].is_login != true) return res.redirect('/login')

    res.render('order.ejs')
}
module.exports = {renderHalamanOrder}