// --------class 5---------
// Js Oject Literals
// let delhi = {
//     latitude : "28.542 N",
//     latitude : "28.542 N"
// };
// console.log(delhi);
// let student = {
//     name: "Palak",
//     rollno: 47,
//     age : 3,
//     marks :[45,56]
// };
// console.log(student);

// ex:threda/twitter Post
// const post = {
//     username:"@palakrehan",
//     content:"this is my post ",
//     likes:150,
//     repost:3,
//     tags:["@apnacollege","@delta"]
// };
// console.log(post);
// console.log(post["likes"]);
// console.log(post.likes);

// let prop = "repost";
// console.log(post[prop]);
// console.log(post.prop);  invalid hoga


// Get value 

// when we create obj and pass idx in bracket : it first convert internal into string than compare with obj 
// nt with dot it accept string val only (obj.true works) 
// let obj={
//     1:"a",
//     2:"b",
//     true:"c",
//     null:"d",
//     undefined:"e"
// };
// console.log(obj[1]);
// console.log(obj[true]);
// console.log(obj.true);
// console.log(obj.1); will throw error

// Add/Update
// const student = {
//     name: "Palak",
//     rollno: 47,
//     age : 3,
//     marks :[45,56],
//     city :"Mumbai",
// };
// console.log(student);
// console.log(student.city = "Delhi");
// console.log(student.gender = "Female");
// console.log(student.mark="A");
// console.log(delete student.city);
// console.log(student);

// Nested of object
// const classInfo = {
//     aman:{
//         grade:"A+",
//         city:"delhi"
//     },
//     palak:{
//         grade:"A+",
//         city:"delhi"
//     },
//     rehan:{
//         grade:"b+",
//         city:"jammu"
//     }
// }
// console.log(classInfo);
// console.log(classInfo.aman);
// console.log(classInfo.aman.city);
// console.log(classInfo.aman.city ="gurgoan");
// console.log(classInfo.aman);
// console.log(classInfo.aman.city );

// Array of Objects
// const classInfo = [
//     {   name:"aman",
//         grade:"A+",
//         city:"delhi"
//     },
//     {   name :"palak",
//         grade:"A+",
//         city:"delhi"
//     },
//     {   name:"rehan",
//         grade:"b+",
//         city:"jammu"
//     }
// ]
// console.log(classInfo);
// console.log(classInfo[0]);
// console.log(classInfo[0].name);
// console.log(classInfo[0].name="guragoan");
// console.log(classInfo[0]);


// Math .abs(-12) = 12 | .pow(2,3) = 8 |.floor(4.654) = 5 | .ceil(3.4) = 4 | .random() = 0-1

// random no btw 0-10
// let num = Math.floor(Math.random()*10)+1;
// console.log(num);

// 0-100
// let num = Math.floor(Math.random()*100)+1;
// console.log(num);

// 20-25
// let num = Math.floor(Math.random()*5)+20;
// console.log(num);
// ---------------------------------------------------
// guessing game
// const n = prompt("enter any no");
// // console.log(n);
// const random =Math.floor( Math.random() *n )+1;
// // console.log(random);
// let guess = prompt("guess the no");
// while(true){
//     if( guess == "quit"){
//         console.log("user quit");
//         break;
//     }
//     if( guess == random){
//         console.log("you are right! , Congrats!! random number was", random);
//         break;
//     }
//     else if( guess < random){
//         guess=prompt("Hint:your guess wass too small ! Please try again");
        
//     }else{
//        guess = prompt("Hint: your guess was too large! .Please try again");
//     }
// }
// ---------------------------------------------------------
// practice
// q2,3
// const car={
//     name:"xvy",
//     model:"acbc",
//     color:"black"
// };
// console.log(car.name);
// console.log(car.color = "blue");
// console.log(car.avg = "45km/hr"
// );
// Q1
// const dice = (Math.floor(Math.random()*6)+1);
// console.log(dice);
