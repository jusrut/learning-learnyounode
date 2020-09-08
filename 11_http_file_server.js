let http = require('http')
let fs = require('fs')

let server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    fs.createReadStream(process.argv[3]).pipe(response)
})

server.listen(process.argv[2])
