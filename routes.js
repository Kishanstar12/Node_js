const fs = require('fs');

const requestHandler = (req, res) => {
    const url=req.url;
    const method=req.method;
    
    if (url === '/') {
        fs.readFile('message.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                res.write('<html>');
                res.write('<head><title>Enter Message</title><head>');
                res.write(`<body><h4>${data}</h4><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
                res.write('</html>');
                return res.end();
            }
        });


    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });

    }
}

//module.exports=requestHandler;

// module.exports={
//     handlers:requestHandler,
//     someText:"some hard coded text",
    
// };

module.exports.handlers=requestHandler;
module.exports.someText='some hard coded text';