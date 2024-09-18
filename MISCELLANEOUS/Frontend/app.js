// // object Prototype------------
// let arr1 = [1,2,3]
// let arr2= [1,2,3]
// arr1.sayHello=()=>{
//     console.log("hello");
// }

// arr2.sayHello=()=>{
//     console.log("hello");
// }


// factory func  -copy create---------------
// function PersonMaker(name , age){
//     const person={
//     name: name,
//     age:age,
//     talk(){
//         console.log(`hi my name i s ${this.name}`);  
//     },
// }
// return person;

// }
// let p1 = new PersonMaker("appak" , 33);
// let p2 = new PersonMaker("appak" , 33);

// Constructor /class----------------
// class PersonMaker {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`this person can talk${this.name}`);

//     }
// }

// let p1 = new PersonMaker("appak" , 33);
// let p2 = new PersonMaker("appak" , 2);

// Inhertance-----------
class Person{
    constructor(name ,age){
        console.log("person class const called");
        this.name = name ; 
        this.aege = age;
    }
    talk(){
        console.log(`hi i am ${this.name}`); 
    }
}
class Student extends Person{
    constructor(name , age , marks){ 
        console.log("student class const called");
        super(name,age);  //parent const called
        this.marks = marks;
    }
    
}
let std1= new Student("palak",34,43);

class Teacher extends Person{
    constructor(name,age,subject){
        console.log("teacher class const");
        super(name,age);
        this.subject = subject;
    }
}
let t1= new Teacher("eng");