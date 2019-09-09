var fs = require("fs");

// Asynchronous read
fs.readFile('notes.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// 
console.log("Program Ended");

var data = fs.readFileSync('notes.txt');
 console.log("Synchronous read: " + data.toString());
 console.log("last")
