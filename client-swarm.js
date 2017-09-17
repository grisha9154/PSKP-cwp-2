const cp = require('child_process');
for (let i=0;i<process.argv[2];i++){
    cp.spawn("node",["client.js"]);
}