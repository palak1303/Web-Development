import { useState } from "react";
export default function  Lottery(){

    let[ticket, setTicket] = useState(0);
    let[win , setWin] = useState(false);

    let generate = ()=>{
        let newTicket =Math.floor(Math.random()* 900 )+ 100;

        let num=newTicket
        let sum = Math.floor(num / 100) + Math.floor((num % 100) / 10)+(num%10);

        setWin( sum == 15 ? true : false);
        setTicket(newTicket);
    }
    return (
        <>
        <h1>Lottery <br></br>{win ? "Congrats, you won!!" : "Better luck next time :)"}</h1>
        <p >lottery ticket ={ticket} </p>
        <button onClick = {generate}>Get New Ticket</button>
        </>
    )
}