const fs = require ('fs');

const data = fs.readFile('./hello.txt','utf-8',(err, data) => {
        if (err) {
            console.error("Cannnot read file", err);
        }
        console.log(data);
    });

console.log("This is console log");

// const data = fs.readFileSync('./hello.txt','utf-8');
// console.log(data);

// console.log("This is console log");