
const http = require ('node:http')

const porta = 3000

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(`Requisição recebida! ${req.method} ${req.url}`);
  
    res.statusCode = 201
    res.setHeader('Content-Type', 'application/json');
    //O código não está funcionando pois travou
});

server.listen(porta, ()=> {
    console.log(`Servidor ouvindo na porta ${porta}`)
});
console.log(new Date().toISOString());



