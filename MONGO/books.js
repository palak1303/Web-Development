const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("finish")
})
.catch((err) => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min: [1,"Price is too low for amazon selling"],
    },
    discount:{
        type:Number,
        default :0
    },
    category:{
        type :String,
        enum:["fiction", "non-fiction", "superhero"],
    }
});
const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title:"MAthXII",
//     author : "RD Sharma",
//     price :1200,
// });

let book1 = new Book({
    title:"comics v2",
    author : "robin john",
    genre :["comic", "cuperhero", "fiction"],
    price: -10,
});

book1
.save()
.then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
    
})