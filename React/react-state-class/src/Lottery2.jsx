import {useState} from "react";
import "./Lottery2.css";
import { genTicket ,sum} from "./helper";
import Ticket from "./Ticket";

export default function Lottery2({n=3 , winCondition }){

    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = winCondition(ticket);

    let buyTicket = ()=>{
        setTicket(genTicket(n));
    };

    return (
        <div>
            <h1>
            Lottery Game!
            </h1>
            <Ticket ticket={ticket}/>
            <button onClick ={buyTicket}>Buy New Ticket</button>
            <br></br>
            <br></br>
            <h3>{isWinning && "Congrats, you won !"}</h3>
        </div>
    );
}