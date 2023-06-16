const mysql = require('mysql2')

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USERNAME,
    database: process.env.DB_NAME,
    password: process.env.PASSWORD
})

db.getConnection((err)=>{
    if(err) return console.error('Error connecting to database...\n'+err)

    console.log('Connected to database kopi_senja')
})

module.exports = db.promise()
