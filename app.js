const { Socket } = require('dgram');
const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }
});
// server.on('Connection', (socket)=>{
//     console.log("new Connection")
// })
server.listen(3000);

console.log("Listenin on port 3000...")



// EVENT Moduler
// const Logger = require('./logger');
// const logger = new Logger();

// // Register a listener
// logger.on('messageLogged', (arg)=> {
//     console.log('Listener called', arg)
// })

// logger.log('message')

// Raise an event


// FS module
// const fs = require('fs')

// const files = fs.readdirSync('./');
// console.log(files)

// fs.readdir("$", function(err, files){
//     if (err) {
//         console.log('Error', err);
//     }else{
//         console.log('Result', files)
//     }
// });


//OS module
// const os = require('os')

// var totalmemory = os.totalmem();
// var freememory = os.freemem()
// console.log(`Total Memory: ${totalmemory}`);
// console.log(`Total Memory: ${freememory}`);

//PATH module
// const path = require('path')

// var pathObj =path.parse(__filename);

// console.log(pathObj)

//exporting our modules
// import { log } from "./logger";

// const log = require('./logger')

// log('message');

//Hello World
// function hello(name) {
//     console.log("Hello  " + name);
// }

// hello('Josue');

// console.log(module)

