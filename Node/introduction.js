const http = require('http')
const args = require('minimist')(process.argv.slice(2))

// console.log(args)
const hostname = '127.0.0.1'
const port = 3000

const x = 'x'
const y = 'y'
console.log(x, y)
// %s format a variable as a string
// %d format a variable as a number
// %i format a variable as its integer part only
// %o format a variable as an object
console.log('My %s has %d ears', 'cat', 2)

// console.log('%o', Number)


// console.log(args['name']);
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`)
//   })
  