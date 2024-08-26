// ------------- class 11 ------------------------
//  // Call Stack
// function hello(){
//     console.log("inside hello fnc");
//     console.log("hello");
// }
// function demo(){
//     console.log("calling hello fnc");
//     hello();
// }
// console.log("calling demo fnc");
// demo();
// console.log("done");

// // Visualizing break point
// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two() + one();
//     console.log(ans);  
// }
// three();

// // single thread --------------------------------------------------
// synchrous nature 
// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);

// asynchrous natiure - multiple code run at same time but java is single threaded => problem---------------------------------
// setTimeout(function (){
//     console.log("apna college");
// },2000);
// setTimeout(function (){
//     console.log("apna world");
// },2000);
// console.log("hello....");

// h1 = document.querySelector("h1");

// setTimeout(()=>{
//     h1.style.color = "red";
// },1000);
// setTimeout(()=>{
//     h1.style.color = "orange";
// },2000);
// setTimeout(()=>{
//     h1.style.color = "green";
// },3000);

// function changeColor(color , delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     },delay)
// }
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000);
//     });
// });
// changeColor("green",3000);
// callback nesting -> callback hell -> promise , async--------------------------------------


// function savetoDb(data , success , failure){
//     let internetSpeed = Math.floor(Math.random() *10)+1;
//     if( internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// savetoDb(
//     "apna colleg" ,
//     ()=>{
//     console.log("your data was saved");
//     savetoDb(
//         "hello world",
//         ()=>{
//         console.log("success2");
//         savetoDb(
//             "Palak",
//              ()=>{
//             console.log("success3");
//         },()=>{
//             console.log("failure3");
//         })
//     },()=>{
//         console.log("failure2");
//     })
//     },
//     ()=>{
//     console.log("weak connection data was not stored");    
//     }    
// );

// // promise--------------------------------------------------
// function savetoDb(data ){
//     return new Promise (( resolve , reject) =>{
//     let internetSpeed = Math.floor(Math.random() *10)+1;
//     if( internetSpeed > 4){
//         resolve("data was saved");
//     }else{
//         reject("weak connectiion");
//     }
// });
// }

// catch and then--------------------------------------------
// savetoDb("apna college").
// then(()=>{
//     console.log("promise was resolved");
// })
// .catch(()=>{
//     console.log("promise was rejected");
// })


// savetoDb("apna college").
// then(()=>{
//     console.log("promise was resolved");
//     savetoDb("hello world")
//     .then(()=>{
//         console.log("data 2 was saved"); 
//     });
//     return savetoDb("hello world")
// })
// .catch(()=>{
//     console.log("promise was rejected");
// })

// // improved version
// savetoDb("apna college").
// then((result)=>{
//     console.log("data 1 was saved");
//     console.log(result);
//     return savetoDb("hello world")
// })
// .then((result)=>{
//     console.log("data 2 was saved");
//     console.log(result);
//     return savetoDb("palak")
// })
// .then((result)=>{
//     console.log("data 3 was saved");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("promise was rejected");
//     console.log(error);
// })


h1 = document.querySelector("h1");
function changeColor(color , delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color chamge");
        }, delay);
    });
}

changeColor( "red" , 1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange", 1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("green", 1000);
})
.then(()=>{
    console.log("green color was completed");
    return changeColor("blue", 1000);
})
.then(()=>{
    console.log("blue color was completed");
    return changeColor("orange", 1000);
})
    new Promise((resolve , reject)=>{
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    },delay)
});


