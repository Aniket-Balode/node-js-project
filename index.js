// console.log("hello it is my fist node js program")

const fs = require("fs");

// fs.writeFilesync("read.txt", "hello ,fist my file create program");
// fs.writeFilesync("read.txt", "hello ,fist my file create program");
// fs.writeFileSync("read.txt","hello, it is the my fist file program")
// fs.appendFileSync("read.txt", " add the data file")
// fs.renameSync("Read.txt", "read.txt");
const buffer_data = fs.readFileSync("read.txt")
const orginal_data = buffer_data.toString();
console.log(buffer_data);
console.log(orginal_data);
fs.unlinkSync("read.txt");