const fs = require('node:fs');
fs.writeFile("Abc.txt",hello, function(err){
    if(err) {
        console.error(err);
    } else {
        console.log("The file was saved!");
    }
});