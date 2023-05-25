const express = require('express')
const routes = express.Router()


    routes.get('/', (req, res)=>{

        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    //si no hay error realiza la consulta 
    //base dde datos
            conn.query('SELECT * FROM sugerencias', (err, rows)=>{//trae todos los fatos de la tabla 
                if(err) return res.send(err)
    
                res.json(rows)
            })
        })

})


routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //inserta datos en la tabla de la base de datos
        //[req.body] el dato viene de req y body 
        conn.query('INSERT INTO sugerencias set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
//respuesta el mensaje
            res.send('book added!')
        })
    })
})


//15:25 min
module.exports = routes