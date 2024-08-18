// class 6 --Functions
function hello(){
    console.log("hello");
}
// hello();
function printName(){
    for( let i = 0 ; i <= 5 ; i++){
    console.log("palak");
    }
}
// printName();

function poem(){
    console.log("Twimle twinkle little star");
}
// poem();

function roolDice(){
let rand = Math.floor(Math.random() *6)+1;
console.log(rand);
}
// roolDice();

function hello(name , age ){
    console.log( `${name}'s age is ${age}`);
}
// hello("palak " , 14);

function avg( a,b,c){
    console.log((a+b+c)/3);
    console.log("hello");
}
// avg(1,2,13); 
function sum(a,b){
    console.log("hello");
    return(a+b);
    console.log("hello");
}
// console.log(sum(sum(1,2),3));

function table( n){
    for( let i = 0 ; i<=10 ;i++){
        console.log(`${n} * ${i} = ${i*n}`);
        
    }
}
// table(5);
function table( n){
    for( let i = n  ; i<= n*10 ;i+=n){
        console.log(i) ;
    }
}
// table(5);
let arr = ["hi ", "hello", " bye" ,"!"];

function concat(arr){
    let result = " ";

    for( let i = 0 ; i<arr.length;i++){
        result += arr[i];
    }
    return result;
}
// console.log(concat(arr));

// block function global Scope
// lexical scope
// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         console.log(x);
//         console.log(y);
//     }
//     innerFunc();
// }

// Function EXPRESSIION --------------------------------------------
let Hello = function(){
    console.log("hello");
}
// Hello();
let Sum = function(a,b){
    return a+b;
}
// Sum(1,2);
// console.log(Sum(1,2));

// Higher Oder Function
function multipleGreet(func, count){
    for( let i = 0 ; i <= count ; i++){
        func();
    }
}
    let  greet = function(){
        console.log("hello");
}
// multipleGreet(greet ,10);

// multipleGreet(function(){console.log("namaste")},100);
// function test(request){
//     if( request == "odd"){
//         return function(n){
//             console.log(!(n%2 ==0));
//         }
//     }else if (request =="even"){
//         return function(n){
//             console.log((n%2 ==0));
//         }
//     }else{
//         console.log("wrong request");
//     }
// }
// let request = "odd";

//method
// const cal = {
//     num :55,
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     multi: function(a,b){
//         return a*b;
//     },
// }
// cal.num
// cal.add
// cal.add(1,2);
// cal.add(5,6);

// Pratice
// let ele1 = [];
// function largarr(ele,n){
//     for(let i = 0 ; i < ele.length ;i++){
//         if( ele[i]>n){
//             ele1.push(ele[i]);
//         }else{
//             continue;
//         }
//     }
//     return ele1;
// }
// let ele = [1,2,3,43,2,4,55];
// let n = 2;
// console.log(largarr(ele,2));

// function unqiue(str){
//     for( let i = 0  ; i < str.length ;i++){
//         for( let j = 1  ; j < str.length ;j++){
//             if( str[i] == str[j]){
//                 str.replace(j,'');
//             }
//         }
//     }
//     return str;
// }
function unqiue(str){
    let ans = "";
    for( let i = 0  ; i < str.length ;i++){
        let currchar =str[i];
        if( ans.indexOf(currchar) == -1){
                ans+=currchar;
            }
        }
    return ans;
}

let str = "abcdabcdefgggh";
// console.log(unqiue(str));

let count =0;
function vowels(Str){
    for(let i = 0 ; i < s.length;i++){
    if( s[i] == 'a' || s[i] == 'e' ||s[i] == 'i'||s[i] == 'o'||s[i] == 'u' ){
        count ++;
        }
    }
    return count;
}
s = "fygfravio";
// console.log(vowels(s));

function maxlength(country){
    let max = country[0];
    for( let i = 1 ; i < country.length ;i++){
        if(country[i].length > max.length){
           max =country[i];
        }
    }
    return max;
}
let country = ["Austraila", "germany", "united states of America"];
// console.log(maxlength(country));

function random(s,e){
    let diff = (e-s)+1;
let ran = Math.floor(Math.random()*diff) + s;
console.log(ran);
}
console.log(random(3,5));
