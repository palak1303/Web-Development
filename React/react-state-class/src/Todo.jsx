import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let[todos, setTodos] = useState([{task:"Sample task" , id:uuidv4() , isDone : false}]);
    let[newTodo, setNewTodo] = useState("");

    let addNewTask =()=>{
        setTodos((prevTodos)=>{
            return [...todos, {task : newTodo , id: uuidv4() ,isDone : false}];
    });
        setNewTodo("");
    }

    let updateTodoValue =(event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo =(id)=>{
        setTodos((prevTodos)=>todos.filter((prevTodos)=> prevTodos.id != id));
    };

    let upperCaseAll =()=>{
        setTodos((todos)=>(
        todos.map((todo)=>{
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            };
        })
        ));
    };

    let upperCase =(id)=>{
        setTodos((prevTodos)=>(
            prevTodos.map((todo)=>{
                if( todo.id == id){
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
                }else{
                    return todo;
                }
            })
        ));
    };

    let isDone =(id)=>{
        setTodos((prevTodos)=>(
            prevTodos.map((todo)=>{
                if( todo.id == id){
                return {
                    ...todo,
                    isDone :true
                };
                }else{
                    return todo;
                }
            })
        ));
    };
  
    let isDoneAll =()=>{
        setTodos((todos)=>(
        todos.map((todo)=>{
            return {
                ...todo,
                isDone: true,
            };
        })
        ));
    };
    
    return (
        <div>
            <p> Todo List</p>
            <input placeholder ="add a task"  value={newTodo} onChange={updateTodoValue} ></input>
            <button onClick={addNewTask}> Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key = {todo.id} style={{
                            textDecoration: todo.isDone ? 'line-through' : 'none'
                          }}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        <button onClick={()=>upperCase(todo.id)}>UpperCase </button>
                        <button onClick={()=>isDone(todo.id)}>Mark as Done </button>
                        </li>
                    ))
                }
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>UpperCase All</button>
            <button onClick={isDoneAll}>Mark all done </button>
        </div>
    )
}