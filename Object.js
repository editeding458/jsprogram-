// object is the collection of any type of data
const person= {
    name:'testing',
    age:24,
    hobbies:['cricket','watch movie'],
    greet: function(){
         console.log("Hello")
    }
}

//access value from object

console.log(person.name)
console.log(person['name'])

//adding or modifying the data of obj 
person.job="Python Devloper"
person.salary=100000;
console.log(person)

delete person.salary
console.log(person)

//nested object

const person1={
     name:'abc',
     age:21,
     address:{
        city:"keshod",
        zipcode:"362220"

     }
    
}
console.log(person1)
console.log(person1?.address?.city)
console.log(Object.keys(person1))
console.log(Object.values(person1))
console.log(Object.entries(person1))

// 
const user={
     name:"user 1",
     role:"Admin",
     designation:"developer",
     age:21,
     address:{
             city:"keshod",
            zipcode:"362220"
     }
}
//const{name,age,role}=user
//console.log(name,age,role)

//const{name:profilename,age:profileage}=user
//console.log(profilename,profileage)

const{name, age ,role,state="Gujarat"} =user
console.log(name,age,role,state)

const array=[1,2,3]
const moreElements=[...array,4,5,6]
console.log(moreElements)

 const oringinalArray=[1,2,3]
 const copyaar=[...oringinalArray]
console.log(copyaar)


const arr1=[1,2,3]
const arr2=[4,6,7]
const margearr =[...arr1,...arr2]
console.log(margearr)

//sperad opt in obj
const user1={
     name:"abc",
     city:"keshod"

}
console.log(user1)

const newobj={
     ...user1,
     role:"python"

}
console.log(newobj)

//copy obj
const user2={
     name:"abc",
     city:"keshod"

}
const copy={
     ...user2
}
const user3={...copy}
console.log(user3)

//marge obj
const obj1 = {
  name: "abc",
  age: 45
};

const obj2 = {
  city: "abc",
  state: "Gujaretabc",
  age: 30
};

const obj3 = {
  ...obj1,
  ...obj2
};

console.log(obj3);


