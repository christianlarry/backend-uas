const db = require('../config/Database')
const bcrypt = require('bcrypt')

const renderHalamanLogin = (req,res)=>{
    res.status(200).render('login.ejs')
}

const postLogin = async (req,res)=>{
    const username = req.body.username
    const password = req.body.password

    if(!username || username === '') return res.status(400).json({
        code: 400,
        error: {
            message: 'Username tidak boleh kosong'
        }
    })

    if(!password || password === '') return res.status(400).json({
        code: 400,
        error: {
            message: 'Password harus diisi'
        }
    })

    const [user] = await db.query(`SELECT * FROM user WHERE username='${username}'`)

    if(user.length === 0) return res.status(404).json({
        code: 404,
        error: {
            message: 'Username tidak ditemukan'
        }
    })
    
    const passwordMatch = await bcrypt.compare(password,user[0].password)

    if(!passwordMatch) return res.status(400).json({
        code: 400,
        error: {
            message: 'Password salah'
        }
    })

    db.query(`UPDATE user SET is_login=true WHERE id=${user[0].id}`)
    
    res.cookie('user_id',user[0].id,{
        maxAge: 1000*60*60
    })

    res.status(200).json({
        code: 200,
        message: 'Berhasil Login'
    })
}

module.exports = {renderHalamanLogin,postLogin}