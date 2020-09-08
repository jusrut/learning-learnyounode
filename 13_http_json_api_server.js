let http = require('http')
let url = require('url')

let server = http.createServer((request, response) => {
    if (request.method != 'GET') {
        return response.end('Get requests only')
    }

    const pathname = url.parse(request.url).pathname
    const query = url.parse(request.url).query.split('=')[1]
    const date = new Date(query)

    if (pathname == '/api/parsetime') {
        response.writeHead(200, {"Content-Type":"text/json"})
        response.write(JSON.stringify({
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }))
    } else if (pathname == '/api/unixtime') {
        response.writeHead(200, {"Content-Type":"text/json"})
        response.write(JSON.stringify({
            "unixtime": date.getTime()
        }))
    } else {
        response.write('Invalid endpoint')
    }

    response.end()
})

server.listen(Number(process.argv[2]))
