let http = require('http');
let bl = require('bl');

http.get(process.argv[2], (response) => {
    response.pipe(bl((err, data) => {
        console.log(data.toString().length);
        console.log(data.toString());
    }));
}).on('error', console.error);

