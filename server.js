// server.js
const net = require('net');
const port = 8124;
let seed=0;

const server = net.createServer(function(client){
    const socetname =Date.now()+seed++
    console.log('Client connected');

client.setEncoding('utf8');

client.name = Date.now() + seed++;

client.on('data', function(data){
    console.log('Client say: '+ data);
    switch (data){
        case 'QA':
        {
            client.write('ACK');
        }break;
        default:
        {
            client.end('DEC','utf-8')
        }break;
    }

});

client.on('end', function(){ console.log('Client disconnected')});
});

server.listen(port, function() {
    console.log(`Server listening on localhost:${port}`);
});