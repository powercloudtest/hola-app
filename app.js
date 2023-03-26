const express = require('express')
const app = express()
app.get('/', function(request,result){
    result.send('Hola mundo! - Aplicacion Node JS <br>')
})
app.listen(3333,"0.0.0.0",function(){
    console.log('Hola App esta escuando en el puerto 3333')
})
