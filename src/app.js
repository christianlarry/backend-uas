// IMPORT LIBRARY ATAU DEPENDECIES YANG AKAN DIGUNAKAN
const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
const PORT = 3000

// SETTING
app.set('view engine','ejs')
app.set('views','./src/views')

// MIDDLEWARE
app.use(express.static('public'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// IMPORT FUNGSI DARI CONTROLLER
const {renderHalamanBeranda} = require('./controllers/BerandaController')
const {renderHalamanOrder,orderPost} = require('./controllers/OrderController')
const {renderHalamanLogin,postLogin} = require('./controllers/LoginController')
const {postLogout} = require('./controllers/LogoutController')
const {renderHalamanRegister,postRegister} = require('./controllers/RegisterController')

// ROUTING ENDPOINT
app.get('/',(req,res) => res.redirect('/beranda'))

app.get('/beranda',renderHalamanBeranda)

app.get('/order',renderHalamanOrder)

app.get('/login',renderHalamanLogin)
app.post('/login',postLogin)

app.post('/logout',postLogout)

app.get('/register',renderHalamanRegister)
app.post('/register',postRegister)

app.listen(PORT, ()=>console.log(`Server up and running at port ${PORT}`))