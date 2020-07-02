const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer(function(req, res){
    if(req.url === '/' && req.method === 'GET'){
    fs.readFile('./htmls/home.html', function(err, data){
        res.write(data);
        res.end();
    })
    }
    if(req.url.includes('html') && req.method === 'GET'){
        let s = req.url.slice(1);
        let f = "./htmls/";
        s = f + s;
        console.log(s);
                fs.readFile(s, function(err, data){
                    res.write(data);
                    res.end();
                })
    }
    else if(req.url.includes('css') && req.method === 'GET'){
        let s = req.url.slice(1);
        let f = "./styles/";
        s = f + s;
        console.log(s);
                fs.readFile(s, function(err, data){
                    res.write(data);
                    res.end(data);
                })
    }
    if(req.url.includes('jpg') && req.method === 'GET'){
        let s = req.url.slice(1);
        let f = "./picture/";
        s = f + s;
        console.log(s);
                fs.readFile(s, function(err, data){
                    res.write(data);
                    res.end();
                })
    }
}).listen(3000);
app.get( '/product' , function(req, res){

})