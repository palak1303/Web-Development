//  -----------CLASS 10----------------
// let btns = document.querySelectorAll("button");

// for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onmouseenter = function(){
    //     console.log("u entered a button");
    // }
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",function(){
//         console.log("you double clicked me");
//     });
// }

// function sayHello(){
//     alert("hello");
// }
// function sayName(){
//     alert("Apna College");
// }
// btn.onclick = sayhello;

// -------------------------------------------------------------------------------------------------
// ACTIVITY
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated");
    
// })

// function getRandomColor(){
//     let red =Math.floor(Math.random()*255);
//     let green =Math.floor(Math.random()*255);
//     let blue =Math.floor(Math.random()*255);

//     let color= `rgb(${red} ,${green},${blue})`;
//     return color;
// }

// ------------------------------------------------------------------------------------
// EVENT LISTENER
// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside box");
// })

// let p = document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("para was clicked");
// })

// -------------------------------------------------------

// THIS 
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// btn.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor ="blue";
// });
// p.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor ="blue";
// });
// h1.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor ="blue";
// });
// h3.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor ="blue";
// });

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }
// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);

// -----------------------------------------------------
// KEYWORD EVENT
//  let btn = document.querySelector("button");
//  btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
//  })

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key was pressed");
    
// })

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log("code = " ,event.code);
//     if(event.code =="ArrowUp"){
//         console.log("char move forward");
//     }
//     else if(event.code =="ArrowDowm"){
//         console.log("char move dowmward");
//     }
//     else if(event.code =="ArrowLeft"){
//         console.log("char move left");
//         }
//     else if(event.code =="ArrowRight"){
//         console.log("char move right");
//     }
// });
// -----------------------------------------------------------------
// // FORM EVENT
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     console.log("form submitted");
    // event.preventDefault();
//     console.dir(form);

//     let user = this.elements[0];
//     let pass = this.elements[1];

    // let inp = document.querySelector("input");
    // console.dir(inp);
    // console.dir(inp.inner);
    // console.dir(inp.value);

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#password");
    
//     console.log(user.value);
//     console.log(pass.value);

//     alert(`hy ${user.value},your password is set to ${pass.value} `);
// });

// let user = document.querySelector("#user");

// user.addEventListener("change",function(){
//     console.log("input changed");
//     console.log("final value = " , this.value);
    
// });
// user.addEventListener("input",function(){
//     console.log("input event");
//     console.log("final value = " , this.value);
    
// })

// PRACTICE ------------------------------------------------------

// q2
// let body = document.querySelector('body');

// let btn = document.createElement("button");
// btn.innerText = "Click ME!";

// body.append(btn);
//  btn.addEventListener("click",function(){
//     btn.style.backgroundColor ="green";
//  });


// q3
let inp = document.querySelector("input");
let h2 = document.querySelector("h2");

inp.addEventListener("input", function(){
    let username = inp.value;
    h2.innerText = username.replace(/[^a-zA-Z\s]/g, '');
})
// }

