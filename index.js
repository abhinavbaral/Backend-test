const fs = require('node:fs');


const content = 'Hello, world!';


fs.writeFile("Abc.txt", content, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log("The file was saved!");
    }
});
