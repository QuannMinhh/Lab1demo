const http = require('http');
const host = 'localhost'
var port = process.env.PORT || 3003;
const fs = require('fs');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            fs.readFile("index.html", (err, data) => {
                if (!err) {
                    console.error(err);    
                }else {
                    res.write(data)
                    res.end()
                }
            })
        break
        case '/haNoi':
            fs.readFile("haNoi.html", (err, data) => {
                if (!err) {
                    console.error(err);    
                }else {
                    res.write(data)
                    res.end()
                }
            })
        break
        case '/daNang':
            fs.readFile("daNang.html", (err, data) => {
                if (!err) {
                    console.error(err);    
                }else {
                    res.write(data)
                    res.end()
                }
            })
        break
        case '/canTho':
            fs.readFile("canTho.html", (err, data) => {
                if (!err) {
                    console.error(err);    
                }else {
                    res.write(data)
                    res.end()
                }
            })
        break
        case '/HCM':
            fs.readFile("HCM.html", (err, data) => {
                if (!err) {
                    console.error(err);    
                }else {
                    res.write(data)
                    res.end()
                }
            })
        break
        default:
           fs.readFile("404.html", (err, data) => {
            if(!err){
                res.write(data)
                res.end()
            }
           })
        break
    }
})
server.listen(port, () => {
    console.log("server running ay http://" + host + ":" + port)
})