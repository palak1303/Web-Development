const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("succesfull");
})
.catch((err) =>
 console.log(err));


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {   
        from:"neha",
        to:"preeti",
        msg:"send me notes",
        created_at:new Date()
    },
    
];

Chat.insertMany(allChats);