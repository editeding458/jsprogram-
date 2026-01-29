/*string methods()
length()
trim()
toUpperCase()
tolowercase()
include()
indexeof()
Slice()
substring()
replece()
concat()
spilet()*/


let str="Hello"
console.log (str)
console.log (str.length)

let trimText =str.trim();
console.log("trim():",trimText)

console.log("toUpperCase():",str.toUpperCase())
console.log("toLowerCase():",str.toLowerCase())

console.log("includes():",str.includes("javascript"))

console.log("includes():",str.includes("abc"))

console.log("indexof():",str.indexOf("javascript"))

console.log("Slice():",str.slice(2,-7))

console.log("substring():",str.substring(2,5))

console.log("replece():",str.replace("Hello","hey"))

console.log("spilt():",str.split(""))

let extraRect=" -HELLO 25";
console.log("concat():",str.concat("extraRect"))


