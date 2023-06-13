// IMPORT LIBRARY ATAU DEPENDECIES YANG AKAN DIGUNAKAN
const express = require('express')

const app = express()
const PORT = 3000

// SETTING
app.set('view engine','ejs')
app.set('views','./src/views')

// MIDDLEWARE
app.use(express.static('public'))

// IMPORT FUNGSI DARI CONTROLLER
const {renderHalamanBeranda} = require('./controllers/BerandaController')
const {renderHalamanOrder} = require('./controllers/OrderController')
const {renderHalamanLogin} = require('./controllers/LoginController')
const {renderHalamanRegister} = require('./controllers/RegisterController')

// ROUTING ENDPOINT
app.get('/',(req,res) => res.redirect('/beranda'))

app.get('/beranda',renderHalamanBeranda)
app.get('/order',renderHalamanOrder)
app.get('/login',renderHalamanLogin)
app.get('/register',renderHalamanRegister)

app.listen(PORT, ()=>console.log(`Server up and running at port ${PORT}`))