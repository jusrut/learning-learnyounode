// console.log(process.argv);
// console.log(process.argv.length);

var sum = 0;

for (var i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
}

console.log(sum);
