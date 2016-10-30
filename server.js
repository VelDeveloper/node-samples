/**
 * Created by vadivel on 27/08/16.
 */
var express = require('express');
var app = express();
var fs = require('fs');
var jsonData = {count:20,message:'hey vel'};

app.get('/',function (req,res) {
    //res.sendFile takes an absolute path to a file and
    //sets the mime type based on the file extname
    //All the node module contains following variables module,exports & __dirname
    //Internally res.sendfile will call fs.reafile see the below rest call for example
    res.sendFile(__dirname+'/index.html',function (err) {
        if(err){
            res.status(500).send(err);
        }
    })
});
app.get('/fs',function (req,res) {
    fs.readFile('index.html',function (err,buffer) {
        //console.log(buffer);
        var html = buffer.toString();
        res.setHeader('Content-Type','text/html');
        res.send(html);
    });
});
app.get('/data',function (req,res) {
    res.json(jsonData);
});
app.get('/info',function (req,res) {
    res.send(jsonData);
});

var port = 3000;
app.listen(port,function () {
    console.log('Listening on http://localhost:',port);
});