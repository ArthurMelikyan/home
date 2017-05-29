const fs = require("fs");
var myFile = "./text.txt";
fs.readFile( myFile, (err , data) => {
    if (!err) {
        console.log(decodeURIComponent(data));    
    } else{
        console.log("error xndrum em stugel");
    }
    var currentFile = fs.createReadStream("./text.txt");
    var newFile =  fs.createWriteStream("./new.txt");
    if(currentFile){
    currentFile.pipe(newFile);
    }  
});