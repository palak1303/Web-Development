const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");


const checkToken = (req,res,next) =>{
    let{token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401 ,"Access DENIED");
}

app.get("/api" ,checkToken , (req,res)=>{
    res.send("data");
})

// middle =>response send

// app.use((req,res,next)=>{
//     console.log(req);
//     next();
// });


app.use("/random",(req,res,next)=>{
    console.log(" i am only for random")
    next();
})

app.get("/err" ,(req,res)=>{
    abcd =abcd;
});

// error actovity
app.get("/admin",(req,res)=>{
    throw new ExpressError(403, "access to admin is forbidden")
})


// api activity-----------
// app.use("/api" , (req,res,next)=>{
//     let {token} = req.query;
//     if(token === "giveaccess"){
//         next();
//     }
//     res.send("ACCESS DENIED");
// });


// utility Logger -morgan
// app.use((req,res,next)=>{
//     req.time = Date.now();
//     console.log(req.method , req.hostname ,req.path, req.time);
//     next();
// });



app.get('/random', (req,res)=>{
    res.send("hi , i am random");
});

app.get('/', (req,res)=>{
    res.send("hi , i am root");
});

app.use((err,req,res,next)=>{
    let{status=500,message="some error occured"} = err;
    // console.log("------ERROR---------");
    res.status(status).send(message);
});

app.use((req,res)=>{
    res.status(404).send("page not found");
});

app.listen(8080  , ()=>{
    console.log("server listening to port 8080");
})