// ---------class 7--------

// const std = {
//     name:"Palak",
//     age : 12,
//     math:23,
//     eng:32,
//     phy:43,
//     getAvg(){
//         console.log(this);
        
//         let avg = (this.eng+this.math+this.phy)/3;
//         console.log(avg);
//     }
// }
// function getAvg(){
//     console.log(this);
//     let avg = (this.eng+this.math+this.phy)/3;
//     console.log(avg);
// }

// // try & catch
// try{
//     console.log(a);
// }catch{
//     console.log("caught an error . a is not defined ");
// }
// console.log("hello");
// console.log("hello");

// arrow func
// const sum = (a,b) =>{
//     console.log(a+b);
// }
// const pow = (a,b) =>{
//     console.log(a**b); 
// }
// const mul = (a,b) => a*b; 

// Set Timer
// console.log("hi there");
// setTimeout(()=>{
//     console.log("apna College");
    
// },4000)
// console.log("welcome to ");

// Set Interval
// let id = setInterval(() =>{
//     console.log("hello World");
//     },3000);
// console.log(id);

// clearInterval(id);  //to stop 

// const std = {
//     name:"aman",
//     marks:98,
//     prop:this, //global
//     getName : function(){
//         console.log(this);  
//         return this.name;
//     },
//     getMarks:() =>{
//         console.log(this);   //parent's scope  --window
//         return this.marks;
//     },
//     getInfo:function(){
//         setTimeout( ()=> {
//             console.log("apna College")   //student
//         },2000); 
//         },
//     getInfo1: function(){
//         setTimeout(()=> {
//             console.log("apna College")    //window
//         },2000);
//     }
// }

// const square = n => n*n;
// console.log(square(3));

// let id = setInterval( ()=>{
//     console.log("hello")
//     },2000);
// setTimeout(()=>{
//     clearInterval(id);
//     console.log("clear interval");
// },10000);

// Practice 
// const avg = (arr) => {
//     let  total = 0;
//     for( let number of arr){
//         total+= number;
//     }
//     return total/ arr.length;
// }
// let arr = [1,2,3,3,4,5,6];
// console.log(avg(arr));

// let n = 4;
// const isEven = (num) => num%2 ==0;
// console.log(isEven(4));



// //--------classs 8--------------------

// let arr  = [1,2,3,4,5];

// let print = function(el){
//     console.log(el);
// };
// arr.forEach(print);


// arr.forEach(function(el){
//     console.log(el);    
// });

// arr.forEach( (el) =>{
//     console.log(el); 
// });

// let student = [
//     {
//     namee:"palak",
//     marks:34,
// },
// {
//     namee:"palak",
//     marks:94,
// },
// {
//     namee:"palak",
//     marks:44,
// }
// ];

// arr.forEach((student) => {
//     console.log(student.marks);
// });

// let gpa = student.map((el)=>{
//     return el.marks/10;
// });

// Map
// let num =[1,2,3,4,5];
// let double = num.map((el)=>{
//     return el*2;
// });

// Filter
// let nums = [1,2,3,4,7,8,2,9,2];
// let ans = nums.filter((el)=>{
//     return el%2 ==0;
// });

// Every  arr.every(func def or name);
// every = and
// let arr1 = [2,4,6].every((el)=> el%2 ==0);
// let arr2 = [2,3,6].every((el)=> el%2 ==0);
// // some = or
// let arr3 = [2,3,6].some((el)=> el%2 ==0);

// Reduce arr.reduce(reduce func wiht 2 var for(accumulator,element));
// let arr4 = [1,2,3,4].reduce((res,el)=>(res+el));

// Q return max no
// let arr = [1,2,3,4,5,3,6,7,9];
// let max = -1;
// for(let i = 0; i < arr.length;i++){
//      if( max < arr[i]){
//         max = arr[i];
//      }
// }
// console.log(max);

// let max = arr.reduce((max,el)=>{
//     if( max <el){
//         return el;
//     }else{
//         return max;
//     }
// });

// // Q multiple of 10
// let arr = [12,3,4,90,8,40,70];
// let mul = arr.every((el)=> el%10 ==0);

// default Parameter
// function sum(a=2,b){
//     return a+b;
// }
// console.log(sum(1,3));
// console.log(sum(1));   //a=1 b=undefined

// Spread
// with array
// let arr= [1,2,3,4,5];
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));
// console.log(...arr);
// console.log(..."apna college");

// let newArr = [...arr];
// console.log(newArr);
// console.log(newArr.push(0));
// console.log(newArr.push(4));
// console.log(newArr);
// console.log(arr);

// let n1 = [1,3,5,7];
// let n2 = [2,4,6,8];
// let nums = [...n1 , ...n2];
// console.log(nums);

// with object literals
// let data ={
//     emial:"Palakdcuwdch",
//     pasword: 387,
// }

// let newData={ ...data , id:123};
// console.log(newData);

// let arr1 =[1,2,3,4,5];
// let obj1 ={...arr1};
// console.log(obj1);

// let obj2 = { ..."helllo"};
// console.log(obj2);


// Rest 
// function sum(...args){
//     for(let i=0; i<args.length ;i++){
//         console.log("you gave us ",args[i]);
//     }
// }
// function min(a,b,c,d){
//     console.log(arguments);
//     console.log(arguments.length);
//     console.log(arguments.push(1));
// };
// function sum(args){
//     arguments.reduce((sum,el=>sum+el));
// };

// function sum(...args){
//     arguments.reduce((sum,el=>sum+el));
// };

// Destructing
// let names = ["ttony","brute","petter","steeve"];
// let winner = names[0];
// let runnerUp = names[1];
// let secondRunner = names[2];

// let [winner,runnerUp,...others] = names;

// const std ={
//     name:"karan",
//     age :14,
//     class :8,
//     sub :["hindi","english","math"],
//     username:"karan@123",
//     password:"abcd"
// };

// ----------Practice ------

// 1.square and sum
// let arr=[2,4,6,8];
// let sum = arr.reduce((sum,el)=>(sum +el*el)/arr.length);
// console.log(sum);

// 2.using mapcopy = original +5
// let num =[1,2,3,4,5];
// let copy = num.map((el)=>{
//     return el+5;
// });
// console.log(copy);

// // 3.copy array in uppercae
// let word = ["apnacollege"];
// let copy = word.map((el)=>{
//     return el.toUpperCase();
// }
// );
// let copy = {...word};
// console.log(word.toUpperCase());

// 4
// let array = [1,2,3,4];
// function doubleAndReturnArgs(array,...args){
//     args.map((el)=> array.push(el*2));
//     // double.forEach(element => {
//     //     array.push(element);
//     // });
//     console.log(args);
    
//     return array;
// };
// console.log(doubleAndReturnArgs(array,1,2,3,4));

// 5

// let  mergeObjects =(obj1,obj2)=>({...obj1,...obj2});
// console.log(mergeObjects({
//     fname:"palak",
//     age:32
// },
// {
//     lname:"rehan",
//     age2:34
// }));
