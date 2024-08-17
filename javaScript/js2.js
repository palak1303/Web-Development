// --------------Part 4---------
// loop
// console.log(1);
// for( let i = 1;i<=5;i++){
// console.log(i);
// }
// let j =10 ;
// while(j >=5){
//     console.log(j);
//     j--;
// }

// guess movie
// const fav = "toy";

// // let guess = prompt("enter my fav movie");

// // while(guess != fav){
// //     if(guess == "quit"){
// //         console.log("u quit");
// //         break;
// //     }
// //     guess = prompt("retry ! wrong ans");
// // }

// // if(guess == fav){
// //     console.log("Congrats");
// // }

// let fruits = ["mango","apple", "banana","litchi","orange"];
// fruits.push("pineapple");
// for( let i = 0 ; i < fruits.length;i++){
//     console.log(i,fruits[i]);
// }

// let heroes =[
//               ["ironmna","spiderman","flas"],
//               ["superman","wonderwoman", "flash"]
//             ]
// for(let i = 0 ;i<heroes.length;i++){
//     console.log(i,heroes[i]);
//     for(let j=0 ;j<heroes[i].length;j++){
//         console.log(`j=${j},${heroes[i][j]}`);
//     }
// }

// let std= [["aman", 56],["sharada",54],["karam",65]]
// for( let i = 0 ; i < std.length;i++){
//     console.log(`info of std #${i}`);
//     for( let j= 0 ; j < std[i].length;j++){
//         console.log(std[i][j]);
//     }
// }

// let fruit = ["mango","Apple","banana","litchi"];
// for (fru of fruit){
//     console.log(fru);
// }

// To do list
// let todo =[];
// let req = prompt("please enter your request");
// while(true){
//     if( req =="quit"){
//         console.log("quiting app");
//         break;
//     }

//     if( req == "list"){
//         console.log("-----------");
//         for( let i = 0 ; i <todo.length;i++){
//             console.log(i,task[i]);
//         }
//         console.log("--------------");
//     }else if(req == "add"){
//         let task=prompt("please enter the task u want ");
//         todo.push(task);
//         console.log("task added");
//     }else if(req =="delete"){
//         let idx = prompt("please enter the task index");
//         todo.splice(idx,1);
//         console.log("task deleted")
//     }else{
//         console.log("wrong requesr");
//     }
//     req = prompt("please enter your request")
// }

// Practice Ques 
// 1 
// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// for( let i = 0 ; i <arr.length; i++ ){
//     if( arr[i] == num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// 2 no of digit
// let number = 287154;
// let count = 0 ;
// while( number != 0 ){
//     count ++;
//     number = Math.floor(number/10);
// }
// console.log( count);

// 3 sum 
// let number = 287152;
// let sum = 0 ; 
// while( number != 0){
//     let rem = Math.floor(number) % 10;
//     sum += rem;
//     number = number / 10;
// }
// console.log(sum);


// 4. let n = 7 ; 
// function rec(n){
// if( n == 1 || n == 0 ){
//     return 1;
// }
//   return n *rec(n-1);
// }
// console.log(rec(5));


// 5
// let a = [1,12,3,4,5,62,7];
// let max = 0 ;
// for( let i = 0 ; i < a.length ;i++){
//     if( a[i] > max){
//         max = a[i];
//     }
// }
// console.log(max);