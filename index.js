const fs = require('node:fs');


const content = 'Hello, world!';
const nice = 'pretty dope shit' ;


fs.writeFile("Abc.txt", content, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log("The file was saved!");
    }
});


fs.appendFile("Abc.txt", nice, function(err) {
    
    if (err) {
        console.error(err);
    } else {
        console.log("The file was appende!");
    }
});
