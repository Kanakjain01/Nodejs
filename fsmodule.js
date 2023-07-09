
const fs = require('fs');

// fs.readFile('sample.txt' , 'utf8' , (err , data)=>{
//     console.log(err , data)
// })


// const a = fs.readFileSync('sample.txt')
// console.log(a.toString())

// fs.writeFile('file2.txt' , "This is a data" , ()=>{
//     console.log("written to the file")
// })


b = fs.writeFileSync('file2.txt' , "This is a data2" )
console.log(b)
console.log("Finished reading file")