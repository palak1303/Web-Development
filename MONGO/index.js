const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("finish")
})
.catch((err) => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    emial:String,
    age:Number,
});
const User = mongoose.model("User", userSchema);

// delete
User.deleteOne({name:"Bruce"})
.then((res)=>{
    console.log(res); 
});
// find and update-------------------------
// User.findOneAndUpdate({name:"Bruce"} , {age:51})
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// });
// User.findByIdAndUpdate('66e8604bd739a4fa99c76b48' , {emial:"bruce123@gmail.com"})
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// });


// update---------------------------
// User.updateOne({name:"bruce"} , {age:34})
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// });

// User.updateMany({age :{$gt :53} }, {age:34})
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// });

// find-----------------------------------
// User.find({})
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
// });


// insert--------------------------------------
// User.insertMany([
//     {name:"tiny" , emial: "tony@gmail.com", age:55} ,
//     {name:"Peter" , emial: "Peter@gmail.com", age:53} ,
//     {name:"Bruce" , emial: "Bruce@gmail.com", age:50} ,
// ]).then((res)=>{
//     console.log(res);
    
// })
// const user1 = new User({
//     name:"adan",
//     emial:"adam@gmial.com",
//     age :48,
// });

// user2.save()
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// });