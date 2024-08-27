// ----------class 12------------
// async Keyword
// async function greet(){
//     // throw"some random error";
//     return "hello";
// }

// greet()
// .then((result)=>{
//     console.log("promise was successful");
//     console.log("result was : ", result);
// })
// .catch((err)=>{
//     console.log("promise was rejected",err);
// })

// arrow func
// let demo = ()=>{
//     return 5;
// }


// //  Await Keyword-----------------------
//  function getnum(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//         let num = Math.floor(Math.random()*10)+1;
//         console.log(num);
//         resolve();
//     },1000);
// });
//  }
// async function demo(){
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
//     getnum();
//     getnum();
//  }

//  color change ques

// h1 = document.querySelector("h1");
// function changeColor(color , delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("color chamge");
//         }, delay);
//     });
// }
// async function demo(){
//     try{
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     }catch(err){
//         console.log("error");
//         console.log(err);
//     }
// }