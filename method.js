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


/*let str="Hello"
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
/* array method
length()
array
pop()
push()
unshift()
shift()
concat()
includes()
indexOf()
splice()
slice()
join()
delete()
map()
filter()
find()
forEach()
sort()
reverse()
flat()


let arr=['one','two','three',1,{name:'abc'}]
console.log("default array:",arr)


console.log("leneth():",arr.length);

//console.log("push()",arr.push("new adde element"))
arr.push("new adde element")
console.log("array after push:",arr)

console.log("push()",arr.push("new adde element"))

arr.pop();
console.log("array after pop:",arr)

arr.unshift("firest elemet")
console.log("array after unshift:",arr)

arr.shift()
console.log("array after shift:",arr)

let newArr =['str 1' , 'str 2'];
let mixedArr = arr.concat(newArr)
console.log("defult:",newArr)
console.log("array after concat:",mixedArr)

console.log("include():",arr.includes('one'))
console.log("include():",arr.includes('two'))
console.log("include():",arr.includes('three'))



console.log("indexOf:",arr.indexOf('three'))

console.log("slice:",arr.slice(2,4))
console.log("splice:",arr.splice(2,4))
console.log("old array:",arr)

console.log("join:",arr.join(", "))

delete arr[4]
console.log(arr)*/

console.log("Array iteration method:")
let numbers=[1,2,3,4,5,6];

console.log("map:",numbers.map(num => num*2))
console.log("Array map old array :",numbers)

console.log("filter:",numbers.filter(num => num*2))
console.log("Array filter old array :",numbers)

console.log("forEach:")
numbers.forEach(num=>console.log(num))

let num=[3,6,5,2,4,1]
console.log("sort",num.sort())

console.log("reverse()",num.reverse())

let nestedarray =[1,2,[3,4],[5,6]]
console.log("defult nested array:",nestedarray)

let flatArray=nestedarray.flat()
console.log("flatarray",flatArray)

