let net = require('net')

let pad = (num) => num.toString().padStart(2, '0')

let formatDate = (date) => {
    let year = date.getFullYear()
    let month = pad(date.getMonth() + 1)
    let day = pad(date.getDate())
    let hour = pad(date.getHours())
    let minute = pad(date.getMinutes())
    return `${year}-${month}-${day} ${hour}:${minute}`
}

let server = net.createServer((socket) => {
    socket.end(formatDate(new Date()) + '\n')
})

server.listen(process.argv[2])

