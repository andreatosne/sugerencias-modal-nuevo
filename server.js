const express = require('express')
const app = express()
const mysql = require('mysql')
const myconn = require('express-myconnection')



app.set('port', process.env.PORT || 4000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'db_cultupaz'
}



// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())



// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')})

    
// server running -----------------------------------

app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})