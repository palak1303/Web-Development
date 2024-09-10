//------------- class 10 --------------
// bubble 
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelector("li");

// div.addEventListener("click",function(){
//     console.log("div was clciked");
// })
// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clciked");
// })
// for(li of lis){
// li.addEventListener("click",function(){
//     event.stopPropagation();
//     console.log("li was clciked");
// })
// }
// ---------------------------------------------------------------------
// todo app
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;


    let dltbtn = document.createElement("button");
    dltbtn.innerText = "delete";
    dltbtn.classList.add("delete");

    // console.log(inp.value);
    item.appendChild(dltbtn);
    ul.appendChild(item);
    inp.value = "";
    // console.log(" clicked");
})

ul.addEventListener("click", function(event){
    if(event.target.nodeName = "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("delete");
    }

});

// ------------------------------------------------------------