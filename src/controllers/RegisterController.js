const db = require('../config/Database')
const bcrypt = require('bcrypt')

const renderHalamanRegister = (req,res)=>{
    res.render('register.ejs')
}

const postRegister = async (req,res)=>{
    const username = String(req.body.username).toLowerCase().replaceAll(' ','')
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    if(!username || username === '') return res.status(400).json({
        code: 400,
        error: {
            message: 'Username tidak boleh kosong'
        }
    })

    if(!password || !confirmPassword) return res.status(400).json({
        code: 400,
        error: {
            message: 'Password atau confirm password harus diisi'
        }
    })

    if(confirmPassword != password) return res.status(400).json({
        code: 400,
        error: {
            message: 'Password dan confirm password tidak sama'
        }
    })
    
    const hashPassword = await bcrypt.hash(password,12)
    const [result] = await db.query(`INSERT INTO user(username,password) VALUES ('${username}','${hashPassword}')`)
    
    res.status(201).json({
        code: 201,
        data: result,
        message: 'Berhasil register'
    })
}

module.exports = {renderHalamanRegister,postRegister}