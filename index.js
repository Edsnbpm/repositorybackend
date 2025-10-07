require('dotenv').config();
const http = require('http');

function requestController(){
    console.log('Bienvenidos al curso')
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
        <html>
            <head>
                <title>Bienvenidos</title>
            </head>
            <body>
                <h1>Bienvenidos al curso</h1>
                <p>Esta es una pequeña vista desde Node.js</p>
            </body>
        </html>
    `);
}

const server=http.createServer(requestController);

const PORT=process.env.PORT

server.listen(PORT,()=>{
    console.log(`Aplicacion corriendo en el puerto ${PORT}`);
});