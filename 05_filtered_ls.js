/*
 * official answer
 *
 * var fs = require('fs')
 * var path = require('path')
 *
 * var folder = process.argv[2]
 * var ext = '.' + process.argv[3]
 *
 * fs.readdir(folder, function (err, files) {
 *           if (err) return console.error(err)
 *     files.forEach(function (file) {
 *         if (path.extname(file) === ext) {
 *                       console.log(file)
 *         }
 *     })
 * })
 */

var fs = require('fs');
var dir = process.argv[2];
var ext = process.argv[3] || false;
var re = new RegExp('.*\.' + ext);

fs.readdir(dir, function(err, list) {
    if (err) {
        console.log(err);
        throw new Error(err);
    }
    list.forEach(function(item){
        if (!ext || item.match(re)) {
            console.log(item);
        }
    });
});
