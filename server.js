// server.js
const fs = require('fs');
const net = require('net');
const port = 8124;
let seed=0;
const q = [];
const a = [];
fs.readFile("E:\\Univer\\5 семестр\\ПСКП\\PSKP\\Лабы\\lab2\\PSKP-cwp-2\\QA.json","utf-8",function (err, copydata) {
    let i =0;
    JSON.parse(copydata, function (key,value) {
       if(key!=''){
        q[i] = key;
        a[i] = value;
        i++;
       }
    });

const server = net.createServer(function(client){
    const socetname =Date.now()+seed++;
    console.log('Client connected');

client.setEncoding('utf8');

client.name = Date.now() + seed++;

client.on('data', function(data){
    console.log('Client say: '+ data);
    for(let i=0;i<q.length;i++){
        if(q[i]==data){
            client.write(a[getRandomInt(0,2)]);
            return;
        }
    }
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
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}