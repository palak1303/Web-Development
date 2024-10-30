import { useState } from "react";

function init(){
    console.log("init was called");
    return Math.random();
}
export default function Counter(){
    let [count,setCount] = useState(init());   //initialization
    // console.log("comp is render");
    // console.log(`count =${count}`);
    
    // let incCount = ()=>{
    //     setCount((currCount )=>{
    //         return currCount +1;
    //     });
    //     setCount((currCount )=>{
    //         return currCount +1;
    //     });
    // }

    let incCount =()=>{
        setCount((currCount)=>{
            return currCount +1;
        })
    }
    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={incCount}> Inc Count </button>
        </div>
    )
}