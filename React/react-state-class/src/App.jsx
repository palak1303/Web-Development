import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import Lottery2 from './Lottery2'
import LudoBoard from './LudoBOard'
import TodoList from './Todo'
import TicketNum from "./TicketNum";
import Ticket from "./Ticket";
import { sum } from './helper'

function App() {

  let winCondition =(ticket)=>{
   return ticket.every((num) => num === ticket[0]);
  }
  return(
  <>
  <Lottery2 n={3} winCondition= {winCondition}/>
  </>
  )
}

export default App
