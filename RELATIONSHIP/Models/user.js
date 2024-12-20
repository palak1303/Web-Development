const mongoose = require("mongoose");
const {Schema} = mongoose;

const MONGO_URL='mongodb://127.0.0.1:27017/relationDemo'

main()
.then((res)=>{console.log("connection successful");})
.catch((err)=>console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);   
}

const userSchema = new Schema({
    username:String,
    addresses:[
        {
            _id : false,
            location :String,
            city:String
        },
    ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async()=>{
    let user1 = new User({
        username: "sherlock",
        addresses :[{
            location :" 221b Baker Street",
            city :"London"
        }]
    });

    user1.addresses.push({location :"P32 WallStreet" , city :"London"});
    let result = await user1.save();
    console.log(result);
}
addUsers();