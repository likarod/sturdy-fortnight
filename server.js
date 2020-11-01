const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', function(res, res){
    res.send('Bienvenidos al backend de YUGA')
})


app.listen(port, function(){
    console.log("App en escucha en el puerto: " + port)
})