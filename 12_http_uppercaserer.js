let http = require('http')
let map = require('through2-map')

let guardAgainstInvalidMethod = (request) => {
    if (request.method != 'POST') {
        throw 'Forbidden'
    }
}

let server = http.createServer((request, response) => {
    guardAgainstInvalidMethod(request)
    console.log(request.pipe(map((chunk) => {
        return chunk.toString().toUpperCase()
    })).pipe(response))

    // response.write(request.method)
})

server.listen(process.argv[2])
