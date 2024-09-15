const express = require("express");
const app = express();

// console.log(app);

let port = 8080;

// listening
app.listen(port,()=>{
    console.log(`app listening on ${port} `);
})
// app.use((req,res)=>{
    // string---
    // console.log("request recieved");
    // object---
    // res.send("this is a basic response");
    // res.send({
    //     name:"Apple",
    //     color: "red",
    // });
    // html----
    // res.send("<h1>friuts</h1>");
// });

// sending a Response
app.get("/",(req,res)=>{
    res.send("hi i am root path ");
})

// app.get("/apple",(req,res)=>{
//     res.send("u contacted apple path");
// })

// app.get("/serach",(req,res)=>{
//     res.send("u contacted search path");
// })

// app.get("*",(req,res)=>{
//     res.send("not exist path");
// })

// app.get("/:username",(req,res)=>{
//     console.log(req.params);
// });

app.get("/search" ,(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("not exist");
    }
    res.send(`<h1>success</h1> ${q}`);
});

