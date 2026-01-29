// string methods
// length()
// trim ()
// Ltrim()left side space remove in text 
// Rtrim() right side space remove in text
// toUpperCase()
// toLowerCase()
// includes()
// indexOf()
// slice()
// substring()
// replace()
// concat
// split()

//let str = "Hello javascript word";
// console.log(str);

//console.log("length():", str.length);

//let trimText = str.trim();
// console.log("trim():", trimText);
// console.log("toUpperCase():", str.toUpperCase());
// console.log("toLowerCase():", str.toLowerCase());
// console.log("includes():", str.includes("javascript"));
// console.log("indexOf():", str.indexOf("javascript"));
// console.log("slice():", str.slice(1, 32));
// console.log("substring():", str.substring(0, 12));

// let rep= str.replace("Hello","hyyy");
// console.log("replace():",rep);

// let rep1= "hello react";
// console.log("concat():", str.concat(rep1));

// console.log("split():", str.split(" "));

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// array methods

// length()
// push()
// pop()
// pop()
// unshift()
// shift()
// concat()
// includes()
// indexOf()
// splice()
// slice()
// join()
// delete()
// map()
// filter()
// find ()
// foreach()
// sort()
// reverse() 
// flat ()

// let arr = ['one','two','three',1,{name:'name'}]
// console.log("default array:",arr);

// console.log("length():",arr.length);

// //console.log("push()",
// arr.push("add new");
// console.log("array after push",arr)

// arr.pop();
// console.log("array after pop",arr)

// arr.unshift("first add");
// console.log("array after unshift",arr)

// arr.shift()
// console.log("array after shift",arr)

// let newArr=["str 1","str 2"];
// let mixedArr = arr.concat(newArr);
// console.log("default array after concat:",arr);
// console.log("array after concat",mixedArr);

// console.log("includes():",arr.includes("three"));

// console.log("indexOf():",arr.indexOf("two"));

// console.log("slice():",arr.slice(1,3));
// console.log("splice():",arr.splice(1,2));
// console.log ("old arr",arr);
// console.log("join():",arr.join(", "));
// delete arr[1];
// console.log(arr);

console.log("array iteration method :")
let numbers = [1,2,3,4,5,];

console.log("map:",numbers.map(num => num * 2));
console.log("after map old array:",numbers);

console.log("filter:",numbers.filter(num =>num >  2));
console.log("after filters old array:",numbers);

console.log("forEach:")
numbers.forEach(num =>console.log(num));

let num = [3,5,2,4,1]
console.log("sort():",num.sort());

console.log("reverse():",num.reverse());

let nestedArray = [1,2,[3,4],[5,6]];
console.log("default nested array:",nestedArray);
let flatArr = nestedArray.flat();
console.log("flat array:",flatArr);