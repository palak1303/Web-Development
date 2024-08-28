//-------------------class13------------------------------
//JSON 
// let jsonRes = 
// '{"fact":"Your cat heart beats at a rate almost double that of yours, from 110-140 beats per minute.","length":92}';
// console.log(jsonRes);

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);

// test
// hdoopscotch

// AJAX asynchrous javascript and xml  : used to send the 

// GET , POST , 

/*  Status Codes
    200 -ok
    404 not found
    400 bad request
    500 internal server error
*/

// Additional info : url?q=harry+potter;

// header along eith url

// ------------------------
// let url = "https://catfact.ninja/fact";

// using promise------------------------
// fetch(url)
// .then((response)=>{
//     // console.log(response);
//     return response.json();
// })
//     .then((data)=>{
    //         console.log(data);
    //         console.log("data1 =",data.fact);
    //         return fetch(url);
// })
//     .then((data2)=>{
//         console.log("data2=",data2.fact);   
//     })

// .catch((err) =>{
    //     console.log("ERROR-",err);
    
    // })
    
// using await-------------------------
    // async function getFacts(){
        //     try{
            //     let res = await fetch(url);
            //     let data = await res.json();
            //     console.log(data.fact);
            
            //     let res2 = await fetch(url);
            //     let data2 = await res2.json();
            //     console.log(data2.fact);
 
//     }catch(e){
    //         console.log("error", e);
    //     }
    
    //     console.log("bye")
    // }
    
    
// ----------class13------------------------
    
// Axios :libray to make to http request-------------------------
// for cat fact
// let btn = document.querySelector("button");
// let p = document.querySelector("p");

// btn.addEventListener("click",getFacts);

// async function getFacts(){
//     try{
//     let res = await axios.get(url);
//     p.innerText =res.data.fact;
//     }catch(e){
//         console.log("error", e);
//     }
//     console.log("bye")
    // }
    
// for dog img
//     let btn = document.querySelector("button");
//     let url2 = "https://dog.ceo/api/breeds/image/random";
    
//     btn.addEventListener("click",async()=>{
//        let link = await getImage();
//     //    console.log(link);
//        let img = document.querySelector("#facts2");
//        img.setAttribute("src", link);
//     });

// async function getImage(){
//     try{
//     let res = await axios.get(url2);
//     return res.data.message;
//     }catch(e){
//         console.log("error", e);
//         return "No Image Found";
//     }
// }

// Sending headers with API request
// let body = document.querySelector("body");
// let btn = document.querySelector("button");
// const url = "https://icanhazdadjoke.com/";

// btn.addEventListener("click", async ()=>{
//     let res = await getJokes();
//     let p = document.createElement("p");
//     p.innerText = res;
//     body.append(p);
// })

// async function getJokes(){
//     try{
//         const config = {headers:{Accept :"application/json"}};
//         let res = await axios.get(url , config);
//         return res.data.joke;
//     }catch(err){
//         console.log(err);;
//     }
// }

// // access college name using api
// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click" , async()=>{
//     let country = document.querySelector("input").value  ;
//     console.log(country);
//     let colleges = await getColleges(country);
//     // console.log(colleges);
//     show(colleges);
// })

// function show(colleges){
//     let list = document.querySelector("#res");
//     list.innerText = "";
//     for(col of colleges){
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country){
//     try{
//         let res = await axios.get(url + country);
//         return res.data;
//     }catch(e){
//         console.log("error :" , e);
//         return [];
//     }
// 

// 
let url = "http://universities.hipolabs.com/search?name=&country=";



let btn = document.querySelector("button");

btn.addEventListener("click" , async()=>{
    let country = document.querySelector("#country").value  ;
    console.log(country);
    let name = document.querySelector("#name").value  ;
    console.log(name);
    let url2 = `http://universities.hipolabs.com/search?name=${name}&country=${country}`;
    
    let colleges = await getColleges(url2);
    // console.log(colleges);
    show(colleges);
})

function show(colleges){
    let list = document.querySelector("#res");
    list.innerText = "";
    for(col of colleges){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(url2){
    try{
        let res = await axios.get(url2);
        return res.data;
    }catch(e){
        console.log("error :" , e);
        return [];
    }
}