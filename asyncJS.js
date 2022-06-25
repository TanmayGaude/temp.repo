const fs = require('fs')

fs.readFile('first.txt','utf-8',(err, result)=>{
    if(err){
        console.log(err)
        return
    }else{
        first = result
    }
    fs.readFile('second.txt','utf-8',(err, result)=>{
        if(err){
            console.log(err);
            return
        }else{
            second = result
        }
    fs.writeFile('final.txt',`final files are ${first} --- ${second}`,(err, result)=>{
        if(err){
            console.log(err);
        }else{
            return result;
        }
    })
    })

})