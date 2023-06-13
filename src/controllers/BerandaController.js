const db = require('../config/Database')

const renderHalamanBeranda = (req,res)=>{
    res.render('index.ejs')
}

module.exports = {renderHalamanBeranda}