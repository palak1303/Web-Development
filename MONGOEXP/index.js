const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError= require("./ExpressError.js");

app.set("views" ,path.join(__dirname , "views"));
app.set("views engine", "ejs ");
app.use(express.static(path.join(__dirname ,"public" )));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
.then(()=>{
    console.log("succesfull");
})
.catch((err) =>
 console.log(err));

// new Route
app.get("/chats/new" , (req , res)=>{
    throw new ExpressError(404,"Page not found");
    res.render("new.ejs");
});

// create route
app.post("/chats" ,async (req,res ,next)=>{
    try{
    let {from ,to ,msg} = req.body; 
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at : new Date()
    });
    await newChat
    .save()
    .then(res =>{
        console.log("chat was saved")
    })
    .catch((err)=>{
        console.log(err);
    });

    res.redirect("/chats");
}catch(err){
    next(err);
}
});

app.get("/",(req,res)=>{
    res.send("root is working");
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get("/chats" , async(req,res)=>{
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs" , {chats});
});


function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err) =>next(err));
    };
}

// error handling
// NEW Show Route
app.get("/chats/:id" , asyncWrap(async(req,res,next) =>{
    let {id} = req.params;
    let chat =  await Chat.findById(id);
    if(!chat){
        return next( new ExpressError(404,"Chat Not Found"));
    }
    res.render("edit.ejs",{chat});
}));

// edit response
app.get("/chats/:id/edit" , async (req,res) =>{
    let {id} = req.params;
    let chat =  await Chat.findById(id);
    res.render("edit.ejs" , {chat});
})

// update Route
app.put("/chats/:id" , async (req,res)=>{
    let {id} = req.params;
    console.log(id);
    
    let{msg:newMsg} = req.body;
    let updateChat = await Chat.findByIdAndUpdate(
        id ,
        {msg: newMsg},
        {runValidators :true, new :true}
    );
    res.redirect("/chats");
})


// destroy route
app.delete("/chats/:id" , async(req,res) =>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

app.get("/" , (req,res)=>{
    res.send("root is working");
});

const handleValidationError = (err) =>{
    console.log("This is a Validation Error .Please follow rules");
    console.dir(err.message);
    return err;
}
app.use((err,req,res,next)=>{
    console.log(err.name);
    if( err.name ==="ValidationError"){
        err = handleValidationError(err);
    }
    next(err);
});

// Middle ware
app.use((err,req,res,next)=>{
    let {status =500 ,message ="Some Error Occured"}=err;
    res.status(status).send(message);
})

app.listen(8080 , ()=>{
    console.log("server is listening on part 8080"); 
});