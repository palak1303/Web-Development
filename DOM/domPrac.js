// Practice class 9
let body = document.querySelector('body')
// 1
let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click me";
document.querySelector('body').append(button);

// 2
input.placeholder ="username";
button.id = "btn";

// 3
document.querySelector("btn");
btn.style.backgroundColor = "pink";
btn.style.color ="white";

// 4
let h1 = document.createElement("h1");
// document.querySelector('body').prepand(h1);
body.append(h1);
h1.innerText = "DOM Practice";
h1.style.textDecoration = "underline"; 
h1.style.color = "purple"; 

// 5
let p = document.createElement("p");
document.querySelector('body').append(p);
p.innerText = "Apna College Delta Practice";
p.style.textDecoration = "bold"; 