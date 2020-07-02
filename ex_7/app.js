let fs = require('fs');
let http = require('http');
let users = require('./users.json');
http.createServer(function(req, res){
    if(req.url === '/'&& req.method === 'GET'){
        fs.readFile('test.html', function(err, data){
            res.write(data);
            res.end();
        })
    }
    if(req.url === '/573224.jpg'&& req.method === 'GET'){
        fs.readFile('573224.jpg', function(err, data){
            res.write(data);
            res.end();
        })
    }
    if(req.url === '/style.css'&& req.method === 'GET'){
        fs.readFile('style.css', function(err, data){
            res.write(data);
            res.end();
        })
    }
    if(req.url === '/check.js'&& req.method === 'GET'){
        fs.readFile('check.js', function(err, data){
            res.write(data);
            res.end();
        })
    }
    if(req.url === '/checkme'&& req.method === 'POST'){
        req.on('data', function(chunk) {
            let chunk2 = chunk.toString();
            let h = chunk2.split('&');
            let password = h[0].split('=');
            password = password[1];
            let username = h[1].split('=');
            username = username[1];
            console.log(username, password);
            let index = -1;
            for(let i = 0; i < users.length; i++ ){
                if(users[i].password === password && users[i].username === username){
                    index = i;
                }
            }
            if(index >= 0){
                res.write('true');
            }
            else{
                res.write('false');
            }
            res.end();
        })
        
    }
    if(req.url === '/jquery-3.4.1.js'&& req.method === 'GET'){
        fs.readFile('jquery-3.4.1.js', function(err, data){
            res.write(data);
            res.end();
        })
    }
    
}).listen(3000);