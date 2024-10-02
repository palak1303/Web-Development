const mongoose = require("mongoose");
const {Schema} = mongoose;

const MONGO_URL='mongodb://127.0.0.1:27017/relationDemo'

main()
.then((res)=>{console.log("connection successful");})
.catch((err)=>console.log(err));
async function main() {
    await mongoose.connect(MONGO_URL);   
}

const orderSchema = new Schema({
    item:String,
    price:Number,
});

const customerSchema = new Schema({
    name:String,
    orders:[
        {
            type : Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
});

// customerSchema.pre("findOneAndDelete" , async()=>{
//     console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete" , async(customer)=>{
    if( customer.orders.length){
      let res = await  Order.deleteMany({_id : {$in: customer.orders}});
      console.log(res);
    }
});

const Order = mongoose.model("Order", orderSchema);
const customer = mongoose.model("Customer", customerSchema);

// function
const findCustomer = async ()=>{
    let result = await customer.find({}).populate("orders");
    console.log(result);
};

// findCustomer();

// const addCustomer = async() =>{
//     let cust1 = new customer({
//         name: "Rahul Kumar",
//     });
//     let order1= await Order.findOne({item:"chip"});
//     let order2= await Order.findOne({item:"choclate"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save();
//     console.log(result);
// }
// const addOrders = async()=>{
//     let res = await Order.insertMany([
//         {item: "samasa" , price : 12},
//         {item: "chip" , price : 10},
//         {item: "choclate" , price : 40}
//     ]);
//     console.log(res);
// };

// addOrders();
// addCustomer();

const addCust = async()=>{
    let newCust = new customer({
        name:"karan",
    })

    let newOrder = new Order({
        item:"BUrGER",
        price:250
    })

    newCust.orders.push();

    await newOrder.save();
    await newCust.save();


    console.log("added new customer");
}

const delCust = async()=>{
    let data = await customer.findByIdAndDelete("66fade6b059991197f46793d");
    console.log(data);
}

// addCust();
delCust();