const db = require('../config/Database')

const renderHalamanOrder = (req,res)=>{
    res.render('order.ejs')
}

module.exports = {renderHalamanOrder}