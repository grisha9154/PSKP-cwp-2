const fs = require('fs');
fs.open('client_id.log','a',function (err, file_handler) {
    if(!err){
        fs.write(file_handler,'log start',null, 'utf-8', function(err, written){
            if(!err){
                    for(let i=0;i<99999;i++){
                            console.log(i);

                    }
            }else
            {
                console.log("Ошибка записии");
            }
        })
    }else {
        console.log("Ошибка открытия");
    }
})