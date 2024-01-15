var fs= require('fs');
var argv = require('yargs').argv;

var newFile = process.argv[2];
fs.readFile('fileNames.json', function(err, data){
    var existingFiles = JSON.parse(data);
    if(!existingFiles.includes(newFile)){
        fs.writeFile(newFile,'Welcome to node js', (err, res) =>{
            if(err)
              throw err;
            else
              existingFiles.push(newFile);
              fs.writeFile('fileNames.json',JSON.stringify(existingFiles), (err, res) =>{
                if(err)
                  throw err;
                else
                 console.log('You are awesome!!!');
              });
          })
        
    }else{
        console.log('File name exisits!! Try another name');
    }
});