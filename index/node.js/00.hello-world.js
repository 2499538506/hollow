const { error } = require('console');
// var foo = 'hellow nodejs'

// console.log(foo);

var fs = require('fs');

fs.readFile('1.txt',function(error,data) {
    console.log(data.toString());
    console.log(error);
})