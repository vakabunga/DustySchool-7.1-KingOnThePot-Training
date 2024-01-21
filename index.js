require('dotenv').config();
const http = require('http');
const querystring = require('querystring');

const port = process.env.PORT;
const password = process.env.PASSWORD;

http.createServer((req, res) => {
    params = querystring.parse(req.url.slice(2));

    if (params.password !== password) {
        res.writeHead(403);
        res.end();
        return;
    }

    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
    res.write('Привет!');
    res.end();
}).listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
