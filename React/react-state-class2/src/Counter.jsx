import {useState,useEffect} from "react";

export default function Counter(){
    let[countx,setcountx] =useState(0);
    let[county,setcounty] =useState(0);

    let incCountx=()=>{
        setcountx((currCount)=> currCount+1);
    }
    let incCounty=()=>{
        setcounty((currCount)=> currCount+1);
    }
    useEffect(function printSomething(){
        console.log("this is a side-effect");
    });
    [countx,county]

    return(
        <div> 
            <h3>countx={countx}</h3>
            <button onClick={incCountx}>+1</button>
            <h3>county={county}</h3>
            <button onClick={incCounty}>+1</button>
        </div>
    )
}