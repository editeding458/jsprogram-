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





