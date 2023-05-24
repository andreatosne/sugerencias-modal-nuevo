const express = require ('express')
const app = express()
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')
const routes = require('./routes')

app.set('port', process.env.PORT || 5000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'db_cultupaz'
}



// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))

//logra entender los datos en json
app.use(express.json()),
app.use(cors());


// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')})


    app.use('/api', routes)//15:25 min

    
// server running -----------------------------------

app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})