/*1.primitve
2.Number
3.bigiht
4.string
5.boolen
6.symbol
7.null
8.undefined

2.non primitve
array
object
function

let num = 1;
let num2 = 2;
console.log("num",num,num2)


let str ="abc";
let str1 ="bca";
console.log("str",str,str1)

let isture =true;
let isfalse=false;
console.log("boolean",isfalse)

let a;
console.log("undefined",a)

let Bigiht=1234567891;
console.log(Bigiht)

//2. non primitve

let Student ={
    name:"abc",
    roll:123,
    address:{
        city :"jnd",
    }
}
console.log(student)

//array

let arr=[1,2,3,4,5,6,7];
let student ={

}
let arrayofstud =[{},{}]
console.log(arr)*/

function greet(){
    console.log("This is function");

}
greet();
function showValues(value){
    console.log("This is value:",value);
    if(value==20){
        console.log("Number---");
    }

}
showValues();
showValues(20);
showValues([1,2,3,4]);
showValues(20);

function sum(a,b){
      if(a,b==null)
    {
         console.log("null");
    }
      else{
              console.log("add",a+b);
              console.log("sub",a-b);
              console.log("multi",a*b);
              console.log("divi",a/b);
         }
   
}
sum(20,10);
sum()

const add=(a=0,b=0) =>{
    return a+b
}
console.log("this its arrow fun:",add(12,15))

const sub=(a=0,b=0) =>{
  return a-b
}
console.log("this its arrow fun:",sub(20,10))

const multi=(a=0,b=0) =>{
    return a*b
}
console.log("this its arrow fun:",multi(20,10))

const divi=(a=0,b=0) =>{
    return a/b
}
console.log("this its arrow fun:",divi(20,15))

//assment
let value=10;
console.log("defult Values:",value);

value +=5 //value +=5
console.log(value)

value -=5 //value -=5
console.log(value)

value *=5 //value *=5
console.log(value)

value /=5 //value/=5
console.log(value)

//logical
let age=20;
let hasid=true
let has1id=false
let obj={
    name:"student"
  
}

console.log("logical AND (&&):",age> 15&& hasid,has1id);
console.log("logical OR (||):",age> 15 || hasid,has1id);
console.log("logical NOT (!):",!hasid,has1id);


console.log(typeof age)
console.log(typeof hasid)
console.log(typeof has1id)
console.log(typeof name)
console.log(typeof obj)

let value1=10;
let num="10"

console.log("value1==num:",value1==num);
console.log("value1===num:",value1===num);
console.log("value1!=num:",value1!=num);
