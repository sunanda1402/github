// const fs=require('fs')
// fs.writeFileSync('notes.txt',"me sunanda")
// fs.appendFileSync('notes.txt',"sunanda")
const validator=require('validator')
const chalk=require('chalk')
const nam = require('./utilis.js');

console.log(nam("bvb"))
console.log(validator.isEmail("hsdjexam@ple.com"))
console.log(validator.isEmail("hsdjexample.com"))
console.log(chalk.red.underline.bold('hello'))