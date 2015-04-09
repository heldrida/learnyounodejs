var fs = require("fs"),
    buffer = fs.readFileSync(process.argv[2]),
    str = buffer.toString(),
    count = str.split("\n");

console.log(count.length - 1);

