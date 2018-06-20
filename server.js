const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send('Sucess')
});

app.listen(PORT,function(){
    console.log('App listening on port ' + PORT);
});