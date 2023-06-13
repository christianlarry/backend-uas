const mysql = require('mysql2')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'kopi_senja'
})

db.getConnection((err)=>{
    if(err) return console.error('Error connecting to database...\n'+err)

    console.log('Connected to database kopi_senja')
})

module.exports = db.promise()