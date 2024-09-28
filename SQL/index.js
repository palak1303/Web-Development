const { faker } = require('@faker-js/faker');
const mysql=require('mysql2');
const express = require('express');
const app =express();
const path=require("path");
const methodOverride = require("method-override");



// app.use(express.static(path.join(__dirname,"public/css")))
// app.use(express.static(path.join(__dirname,"public/js")))

app.use(methodOverride("_method"));
app.use(express.urlencoded({extend:true}));
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"/views"))

const connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'delta_app'
});
let getRandomUser=()=>{
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ] 
};
app.get("/",(req,res)=>{
    
    let q="SELECT count(*) FROM user";
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log();
            data=result[0]["count(*)"]
            res.render("home.ejs",{data});
        });
    }catch(err){
        console.log(err);   
    }
});


// show route
app.get("/user",(req,res)=>{
    let q = `SELECT * FROM user`;
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
            res.render("showuser.ejs",{users});
        });
    }catch(err){
        console.log(err);   
    }

} );


// edit route
app.get("/user/:id/edit",(req,res)=>{
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q,(err,users)=>{
            let user = users[0];
            if(err) throw err;
            res.render("edit.ejs",{user});
        });
    }catch(err){
        console.log(err);   
    }
    
})

// UPDATE 
app.patch("/user/:id",(req,res)=>{
    let {id} = req.params;
    let {password: formPass,username: newusername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q,(err,users)=>{
            let user = users[0];
            if(err) throw err;
            if(formPass != user.password){
                res.send("WRONG PASSWORd");
            }else{
                let q2 = `UPDATE user SET username = '${newusername}' WHERE id = '${id}'`;
                connection.query(q2,(err , result)=>{
                    if(err) throw err;
                    res.redirect("/user");
                })
            }
        });
    }catch(err){
        console.log(err);  
        res.send("some error") 
    }
})


app.listen("8080",()=>{
    console.log("listing to port 8080");
    
})
// console.log(getRandomUser());